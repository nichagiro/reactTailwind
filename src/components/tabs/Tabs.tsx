import { FC, useCallback, useEffect, useMemo, useState } from "react"
import { ITabs, bg, clas, styleSel } from "./static";
import { ColorsList } from "../../types";
interface Props {
  data: ITabs[],
  defaultValue?: number | string,
  disabled?: boolean
  color: ColorsList,
  changeTab?: (data: ITabs) => void,
}

const Tabs: FC<Props> = ({ data, defaultValue, changeTab, disabled=false, color }) => {
  const [current, setCurrent] = useState<ITabs>();

  const hanldeClick = useCallback((item: ITabs) => {
    setCurrent(item)
    if (changeTab) {
      changeTab(item)
    }
  }, [changeTab])

  useEffect(() => {
    setCurrent(
      data.find(item => item.value === defaultValue)
    )
  }, [defaultValue, data])

  return (
    <div className="block">
      <div className="border-b border-gray-200">
        <nav className="-mb-px flex gap-6">
          {
            useMemo(
              () =>
                data.map((item, index) => (
                  <div
                    key={index}
                    onClick={() => disabled ? null : hanldeClick(item)}
                    className={item.value === current?.value ? `${bg[color]} ${styleSel}` : clas}
                  >
                    {item.name}
                  </div>
                )),
              [color, data, disabled, hanldeClick, current?.value]
            )
          }
        </nav>
      </div >
      <section className="mt-5">
        {current && current.render}
      </section>
    </div >
  )
}

export default Tabs;
