// library
import React, { ReactNode, useCallback, useEffect, useMemo, useState } from 'react';

// hooks
import useDebounce from '../../hooks/useDebounce';

// components
import Pagination from '../pagination/Pagination';
import Button from '../button/Button';

// utils
import excelExport from '../../utils/excel';

// statics
import { ColorsList } from '../../types';
import { bg as inputStyle, inputClas } from '../input/static';
import { bg, bgCheck, checkClas } from './static';
import ExportIcon from '../../icons/ExportIcon';
import DownIcon from '../../icons/DownIcon';
import UpIcon from '../../icons/UpIcon';
import SpinIcon from '../../icons/SpinIcon';

interface DefaultOrder {
  column: string | null,
  direction: 'asc' | 'desc',
}

interface TableColumn {
  header: string,
  key: string,
  jsx?: (row: TableRow) => void
}

interface TableRow {
  [key: string]: unknown,
  id: string | number
}

interface TableProps {
  columns: TableColumn[],
  data: TableRow[],
  color: ColorsList,
  defaultSelects?: Array<string | number>,
  onSelect?: (rows: TableRow[]) => void,
  defaultOrder?: DefaultOrder,
  multi?: boolean,
  itemsPerPage?: number,
  excel?: boolean,
  resetSelection?: boolean,
  loading?: boolean,
  headerText?: string
}

const Table: React.FC<TableProps> = ({
  columns, data, defaultSelects, onSelect, multi = false, color, loading = false,
  defaultOrder, excel = true, resetSelection = false, itemsPerPage = 10, headerText = false
}) => {
  const [selectedRows, setSelectedRows] = useState<(Array<string | number>)>([]);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [currentPage, setCurrentPage] = useState(1);
  const [sortedColumn, setSortedColumn] = useState<string | null | undefined>(defaultOrder?.column);
  const [sorting, setSorting] = useState<DefaultOrder>(defaultOrder || { column: null, direction: 'asc' });

  // debounce to input text search
  const search = useDebounce(searchTerm, 500);

  // for each entry the user write to input
  useEffect(() => setCurrentPage(1), [search]);

  // especially when the data fresh 
  useEffect(() => {
    const newTotalPages = Math.ceil(data.length / itemsPerPage);
    if (currentPage > newTotalPages) {
      setCurrentPage(1);
    }
  }, [data, itemsPerPage, currentPage])

  // fresh table with the sime data
  useEffect(() => {
    if (resetSelection) {
      setSelectedRows([]);
    }
  }, [resetSelection]);

  // refresh selects rows
  useEffect(() => {
    setSelectedRows(defaultSelects || [])
  }, [defaultSelects])

  // data with search in input
  const dataFilter = useMemo(
    () =>
      data.filter(row =>
        Object.values(row).some(value => {
          if (value === null || value === undefined) {
            return false;
          }
          return value.toString().toLowerCase().includes(search.toLowerCase());
        })
      ),
    [data, search]
  );

  // data filtered with sort (order)
  const sortedData = useMemo(
    () =>
      dataFilter.slice().sort((a, b) => {
        if (!sorting.column) return 0;
        const valueA = typeof a[sorting.column] === "string" ? (a[sorting.column] as string).toLowerCase() : a[sorting.column] as number;
        const valueB = typeof b[sorting.column] === "string" ? (b[sorting.column] as string).toLowerCase() : b[sorting.column] as number;

        if (valueA < valueB) {
          return sorting.direction === 'asc' ? -1 : 1;
        }

        if (valueA > valueB) {
          return sorting.direction === 'asc' ? 1 : -1;
        }

        return 0;
      }),
    [dataFilter, sorting]
  );

  // data with sort and filter more pagination
  const filteredData = useMemo(
    () =>
      sortedData.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage),
    [sortedData, currentPage, itemsPerPage]
  )

  // number pages params to component pagination
  const totalPages = useMemo(() => Math.ceil(dataFilter.length / itemsPerPage), [dataFilter, itemsPerPage])


  // onClick in selection row
  const toggleRowSelection = (rowKey: string | number) => {
    if (multi) {
      multiSelection(rowKey);
    } else {
      handleSelection(rowKey);
    }
  };

  // one mode selection
  const handleSelection = (rowKey: string | number) => {
    setSelectedRows([rowKey]);
    if (onSelect) {
      onSelect(data.filter(item => item.id === rowKey));
    }
  };

  // multi mode selection
  const multiSelection = (rowKey: string | number) => {
    let rows: Array<string | number>;
    if (selectedRows.includes(rowKey)) {
      rows = selectedRows.filter(key => key !== rowKey);
    } else {
      rows = [...selectedRows, rowKey];
    }
    setSelectedRows(rows);
    if (onSelect) {
      onSelect(data.filter(item => rows.includes(item.id)));
    }
  };

  // in mode multi, select/unselect all
  const toggleAllRowsSelection = () => {
    const allRowKeys = data.map(row => row.id);
    if (selectedRows.length === data.length) {
      setSelectedRows([]);
      if (onSelect) {
        onSelect([]);
      }
    } else {
      setSelectedRows(allRowKeys);
      if (onSelect) {
        onSelect(data);
      }
    }
  };

  // click in column , to order 
  const handleSort = (columnKey: string) => {
    setSorting(prevState => ({
      column: columnKey,
      direction: prevState.column === columnKey && prevState.direction === 'asc' ? 'desc' : 'asc',
    }));
    setSortedColumn(columnKey);
  };

  // export table in excel document
  const onExcel = useCallback(() => {
    const cols = columns.map(col => col.header);
    const rows = data.map(item => {
      const newRow: Record<string | number, unknown> = {};
      columns.forEach(col => {
        newRow[col.key] = item[col.key];
      });
      return newRow;
    });
    excelExport(cols, rows, new Date().toString());
  }, [columns, data])

  return (
    <>

      <div className="container relative p-4 mx-auto border shadow rounded-lg overflow-x-auto">
        {
          data.length > 0 && <>
            <div className='flex flex-wrap gap-6 mb-6'>
              {/* Input de búsqueda */}
              <div>
                <input
                  type='search'
                  placeholder='Buscar...'
                  className={`${inputClas} ${inputStyle[color]} p-3`}
                  onChange={e => setSearchTerm(e.target.value)}
                />
              </div>
              {
                // excel button
                excel &&
                <div className='mt-1.5'>
                  <Button color={color} onClick={onExcel} type='button'>
                    <ExportIcon className='w-5 h-5' />
                    Excel
                  </Button>
                </div>
              }
            </div>
            {
              headerText &&
              <div className='mb-5 ps-1 text-sm font-medium text-zinc-400'>
                {headerText}
              </div>
            }
          </>
        }
        {/* Tabla */}
        <table className={`${loading ? "opacity-50" : "opacity-100"} min-w-full divide-y divide-gray-200 dark:divide-gray-700`}>
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-3.5 text-sm font-bold text-gray-500 dark:text-gray-400 text-center">
                {/* Checkbox para seleccionar/deseleccionar todas las filas */}
                {
                  multi && search === "" ?
                    <input
                      type="checkbox"
                      onChange={toggleAllRowsSelection}
                      checked={selectedRows.length === data.length}
                      className={`${bgCheck[color]} ${checkClas}`}
                    /> :
                    "Seleccione"
                }
              </th>
              {/* Renderizar encabezados de columnas */}
              {columns.map((column) => (
                <th
                  key={column.key}
                  scope="col"
                  className="px-4 py-3.5 cursor-pointer"
                  onClick={() => handleSort(column.key)}
                >
                  <div className='flex justify-center gap-x-0.5 text-sm text-gray-500'>
                    {/* icon order */}
                    {
                      sortedColumn === column.key
                        ? (sorting.direction === 'asc'
                          ? <DownIcon className='w-3 h-3 mt-1' />
                          : <UpIcon className='w-3 h-3 mt-1' />)
                        : ''
                    }
                    {column.header}
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 dark:divide-gray-700 border-none">
            {/* Renderizar filas de datos */}
            {filteredData.map((row, index) => (
              <tr key={index} className={selectedRows.includes(row.id) ? `${bg[color]} border-none transition-colors` : "border-none hover:bg-slate-100"}>
                {/* Celda de checkbox para seleccionar/deseleccionar la fila */}
                <td className="px-4 py-4 text-sm whitespace-nowrap text-center">
                  <input
                    type="checkbox"
                    onChange={() => toggleRowSelection(row.id)}
                    checked={selectedRows.includes(row.id)}
                    className={`${bgCheck[color]} ${checkClas}`}
                  />
                </td>
                {/* Renderizar celdas de datos */}
                {columns.map((column) => (
                  <td
                    key={column.key}
                    onClick={() => toggleRowSelection(row.id)}
                    className="px-4 py-4 text-sm whitespace-nowrap text-center max-w-xs overflow-hidden overflow-ellipsis cursor-pointer"
                    title={typeof row[column.key] === "string" ? row[column.key] as string : ""}
                  >
                    {
                      column.jsx ? column.jsx(row) as ReactNode : row[column.key] as string
                    }
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
        {
          loading &&
          <div className="absolute inset-0 flex items-center justify-center mt-40">
            <SpinIcon className='h-10 w-10' />
          </div>
        }
        {
          filteredData.length === 0 &&
          <div className='text-center w-full my-5 text-gray-700'>
            <p>Sin resultados</p>
          </div>
        }
      </div>

      {/* Controles de paginación */}
      <div className="flex justify-center mt-5">
        <Pagination
          totalPages={totalPages}
          onPageChange={(value) => setCurrentPage(value)}
          current={currentPage}
          color={color}
        />
      </div>
    </>
  );
};

export default Table;
