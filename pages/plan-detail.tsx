import PriceItem from '../components/PriceItem'

export default function PlanDetail() {
  return (
    <div>
      <div className="grid grid-cols-1 grid-rows-2">
        <div className="grid gap-y-4 upper">
          <div className="top-title py-4 ml-2">
            <h2 className="text-2xl">신일전자</h2>
          </div>
          <div className="grid grid-cols-10 gap-x-2 mx-2 px-2 current-price-panel">
            <div className="price-item">
              <p className="text-lg font-bold">현재 평단가</p>
              <span className="text-lg font-bold">2,222</span>
              <span className="text-lg font-bold">89주</span>
            </div>
            <div className="price-item">
              <span>현재 평단가</span>
              <span>2,222</span>
              <span>89주</span>
            </div>
            <div className="price-item">
              <span>현재 평단가</span>
              <span>2,222</span>
              <span>89주</span>
            </div>
            <div className="price-item">
              <span>현재 평단가</span>
              <span>2,222</span>
              <span>89주</span>
            </div>
            <div className="price-item">
              <span>현재 평단가</span>
              <span>2,222</span>
              <span>89주</span>
            </div>
            <div className="price-item">
              <span>현재 평단가</span>
              <span>2,222</span>
              <span>89주</span>
            </div>
            <div className="price-item">
              <span>현재 평단가</span>
              <span>2,222</span>
              <span>89주</span>
            </div>
            <div className="col-span-3 price-chart bg-blue-400">chart</div>
          </div>
          <div className="grid grid-cols-4 gap-x-2 shadow-lg rounded-lg input-panel">
            <div className="grid grid-flow-row px-2 py-2 gap-y-1 grid-cols-3 content-start input-panel-item">
              {/* 첫번째 패널 */}
              <label className="label font-bold">종목명</label>
              <input className="input-normal" type="text" value="신일전자" />

              <label className="label font-bold">종목 코드</label>
              <input className="input-normal" type="text" value="002700" />

              <label className="label font-bold">거래소</label>
              <select className="col-span-2 select select-sm select-bordered w-full max-w-xs">
                <option value="KOSPI">KOSPI</option>
                <option value="KOSDAQ">KOSDAQ</option>
              </select>

              <label className="label font-bold">선정일</label>
              <input className="input-normal" type="text" value="2022-06-23" />

              <label className="label font-bold">할당 금액</label>
              <input className="input-normal" type="text" value="1,000,000" />

              <label className="label font-bold text-blue-600">
                기준봉 시가
              </label>
              <input className="input-normal" type="text" value="1,000,000" />

              <label className="label font-bold text-red-500">
                기준봉 종가
              </label>
              <input className="input-normal" type="text" value="1,000,000" />

              {/* // 첫번째 패널 */}
            </div>
            <div className="grid grid-flow-row px-2 py-2 gap-x-1 gap-y-1 grid-cols-3 content-start input-panel-item">
              {/* 두번째 패널 */}
              <label className="label font-bold">1호가</label>
              <input className="input-normal" type="text" value="5" />

              <label className="label font-bold">기준가 top</label>
              <input
                type="text"
                className="input input-sm input-bordered"
                value="2,385"
              />
              <div className="form-control pr-2">
                <label className="input-group input-group-sm">
                  <input
                    type="text"
                    placeholder="0.01"
                    className="input input-sm input-bordered w-12"
                  />
                  <span>%</span>
                </label>
              </div>

              <label className="label font-bold">중간값</label>
              <input
                type="text"
                className="input input-sm input-bordered"
                value="2,385"
              />
              <div className="form-control pr-2">
                <label className="input-group input-group-sm">
                  <input
                    type="text"
                    placeholder="0.01"
                    className="input input-sm input-bordered w-12"
                  />
                  <span>%</span>
                </label>
              </div>

              <label className="label font-bold">기준가 bottom</label>
              <input className="input-normal" type="text" value="2,205" />
              {/* // 두번째 패널 */}
            </div>
            <div className="grid grid-flow-row px-2 py-2 gap-x-1 gap-y-1 grid-cols-3 content-start input-panel-item">
              <label className="label font-bold">평균단가/수량</label>
              <input
                className="input input-sm input-bordered "
                type="text"
                value="2,222"
              />
              <input
                className="input input-sm input-bordered "
                type="text"
                value="89"
              />

              <label className="label font-bold">총 매수 금액</label>
              <input
                className="input input-sm input-bordered col-span-2"
                type="text"
                value="신일전자"
              />
            </div>
            <div className="grid grid-flow-row px-2 py-2 gap-x-1 gap-y-1 content-start input-panel-item2">
              <div className="grid gap-x-1 grid-cols-[1fr_1fr_4rem_2rem] items-center">
                <span className="label-text font-bold">감시 가격</span>
                <input
                  type="text"
                  className="input input-sm input-bordered"
                  value="2,200"
                />
                <select className="select select-sm select-bordered">
                  <option value="up">up</option>
                  <option value="down">down</option>
                </select>
                <input type="checkbox" className="checkbox checkbox-accent" />
              </div>

              <div className="grid gap-x-1 grid-cols-[1fr_1fr_4rem_2rem] items-center">
                <span className="label-text font-bold">목표가</span>
                <div className="form-control pr-2">
                  <label className="input-group input-group-sm">
                    <input
                      type="text"
                      placeholder="0.01"
                      className="input input-sm input-bordered w-12"
                    />
                    <span>%</span>
                  </label>
                </div>

                <select className="select select-sm select-bordered">
                  <option value="up">up</option>
                  <option value="down">down</option>
                </select>
                <input type="checkbox" className="checkbox checkbox-accent" />
              </div>

              <div className="grid gap-x-1 grid-cols-[1fr_1fr_4rem_2rem] items-center">
                <span className="label-text font-bold">손절가</span>
                <div className="form-control pr-2">
                  <label className="input-group input-group-sm">
                    <input
                      type="text"
                      placeholder="0.01"
                      className="input input-sm input-bordered w-12"
                    />
                    <span>%</span>
                  </label>
                </div>

                <select className="select select-sm select-bordered">
                  <option value="up">up</option>
                  <option value="down">down</option>
                </select>
                <input type="checkbox" className="checkbox checkbox-accent" />
              </div>

              <div className="grid gap-x-1 grid-cols-[1fr_1fr_4rem_2rem] items-center">
                <span className="label-text font-bold">VIX 감시</span>
                <div className="form-control pr-2">
                  <label className="input-group input-group-sm">
                    <input
                      type="text"
                      placeholder="0.01"
                      className="input input-sm input-bordered w-12"
                    />
                    <span>%</span>
                  </label>
                </div>

                <select className="select select-sm select-bordered">
                  <option value="up">up</option>
                  <option value="down">down</option>
                </select>
                <input type="checkbox" className="checkbox checkbox-accent" />
              </div>

              <div className="grid gap-x-1 grid-cols-[1fr_1fr_4rem_2rem] items-center">
                <span className="label-text font-bold">Trail mode</span>
                <select className="select select-sm select-bordered">
                  <option value="up">up</option>
                  <option value="down">down</option>
                </select>
              </div>
            </div>
          </div>
          <div className="flex flex-row-reverse gap-2 py-2 pr-2 h-18 content-end bg-yellow-500 button-container">
            <button className="btn btn-primary">중간값으로 계산</button>
            <button className="btn btn-primary">알림 가격 계산</button>
            <button className="btn btn-primary">시나리오 값 저장</button>
          </div>
        </div>

        <div className="grid bottom">
          <div className=" top-title">
            <h2 className="text-2xl">시나리오</h2>
          </div>
          <div className="h-48">표</div>
          <div className="flex flex-row-reverse gap-2 py-2 pr-2 h-18 content-end bg-yellow-500 button-container">
            <button className="btn btn-primary">시나리오 값 저장</button>
          </div>
        </div>
      </div>
    </div>
  )
}
