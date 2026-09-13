import { useEffect, useState } from "react";
import axios from "axios";
const API_URL = import.meta.env.VITE_API_URL;


const Positions = () => {
  const [allPositions, setAllPositions] = useState([]);

  useEffect(() => {
    axios
      .get(`${API_URL}/allPositions`)
      .then((res) => {
        setAllPositions(res.data);
      })
      .catch((err) => {
        console.log("Error fetching positions:", err);
      });
  }, []);

  return (
    <>
      <h3 className="title">
        Positions ({allPositions.length})
      </h3>

      <div className="order-table">
        <table>
          <thead>
            <tr>
              <th>Product</th>
              <th>Instrument</th>
              <th>Qty.</th>
              <th>Avg.</th>
              <th>LTP</th>
              <th>P&L</th>
              <th>Net chg.</th>
              <th>Day chg.</th>
            </tr>
          </thead>

          <tbody>
            {allPositions.map((stock) => {
              const currentValue =
                stock.price * stock.qty;

              const investment =
                stock.avg * stock.qty;

              const profit =
                currentValue - investment;

              const profitClass =
                profit >= 0 ? "profit" : "loss";

              const dayClass =
                stock.isLoss ? "loss" : "profit";

              return (
                <tr key={stock._id}>
                  <td>{stock.product}</td>

                  <td>{stock.name}</td>

                  <td>{stock.qty}</td>

                  <td>
                    {Number(stock.avg).toFixed(2)}
                  </td>

                  <td>
                    {Number(stock.price).toFixed(2)}
                  </td>

                  <td className={profitClass}>
                    {profit.toFixed(2)}
                  </td>

                  <td className={profitClass}>
                    {stock.net}
                  </td>

                  <td className={dayClass}>
                    {stock.day}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Positions;