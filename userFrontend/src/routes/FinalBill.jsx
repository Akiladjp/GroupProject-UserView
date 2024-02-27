/* eslint-disable no-unused-vars */
import React from "react";

const FinalBill = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center mt-8 ">
        <h1 className="text-[32px] font-bold">Kaema Restaurant</h1>
        <h2 className="text-[20px]">Kandy Srilanka</h2>
        <h2 className="font-bold">HOTLINE : 081-1111111</h2>
      </div>
      <div className="w-[90%] mt-8 text-center  m-auto">
        <hr />
        <div className="grid grid-cols-2 md:w-[50%] justify-center ">
          <div className="w-[50%] ml-2 flex">
            Bill No: <p>1200</p>
          </div>
          <div className="w-[50%] ml-0 ">
            Time:
            <br />
            Date:
          </div>
        </div>
        <hr />
      </div>
      <div>
        <div className="text-center ">
          <div className="p-6 ">
            <table className="w-[100%] md:w-[50%]">
              <thead>
                <tr className="w-full text-center ">
                  <th className="pb-4 text-center">Item</th>
                  <th className="pb-4 text-center">Price</th>
                  <th className="pb-4 text-center">Qty</th>
                  <th className="pb-4 text-current">Amount</th>
                </tr>
              </thead>
              <tbody className="">
                <tr className="border-b">
                  <td className="py-2">Pizza</td>
                  <td className="py-2">200</td>
                  <td className="py-2">2</td>
                  <td className="py-2">400</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2">Burger</td>
                  <td className="py-2">150</td>
                  <td className="py-2">3</td>
                  <td className="py-2">450</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2">Salad</td>
                  <td className="py-2">100</td>
                  <td className="py-2">1</td>
                  <td className="py-2">100</td>
                </tr>
              </tbody>
              <tfoot className="w-[90%]  m-auto  font-bold">
                <tr className="ml-12 ">
                  <td colSpan="3" className="py-2 mr-16 text-left ">
                    Total
                  </td>
                  <td className="py-2 font-bold">950</td>
                </tr>
                <tr>
                  <td colSpan="3" className="py-2 text-left">
                    Cash Paid
                  </td>
                  <td className="py-2 font-bold">1000</td>
                </tr>
                <tr>
                  <td colSpan="3" className="py-2 text-left">
                    Balance
                  </td>
                  <td className="py-2 font-bold">50</td>
                </tr>
              </tfoot>
            </table>
            <hr />
          </div>
          <div className="flex items-center justify-center pb-6 font-bold">
            Thank You Come Again !!!
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinalBill;
