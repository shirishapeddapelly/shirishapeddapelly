import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Addition,
  Subtraction,
  Multiplication,
  Division,
  Madulo,
  Allclear,
  Total,
  One,
  Two,
  Three,
  Four,
  Five,
  Six,
  Seven,
  Eight,
  Nine,
  Zero,
} from "../../redux-components/action -creators/ActionCreatersForCalculater";
const Calculater = () => {
  const dispatch = useDispatch();
  const storeData = useSelector((state) => state);
  console.log(storeData);

  return (
    <div>
      <center>
        <table border="2" align="center" className="bg-secondary">
          <tr>
            <td colspan="4">
              <h3>SIMPLE CALCULATER</h3>
            </td>
          </tr>

          <tr>
            <td colspan="3">
              <h4 className="bg-light">{storeData.calculaterData.Value}</h4>
            </td>
            <td colspan="1">
              <button
                style={{ width: 30 }}
                onClick={() => {
                  dispatch(Allclear());
                }}
              >
                ac
              </button>
            </td>
          </tr>
          <tr>
            <td>
              <button
                style={{ width: 30 }}
                onClick={() => {
                  dispatch(One(1));
                }}
              >
                1
              </button>
            </td>
            <td>
              <button
                style={{ width: 30 }}
                onClick={() => {
                  dispatch(Two(2));
                }}
              >
                2
              </button>
            </td>
            <td>
              <button
                style={{ width: 30 }}
                onClick={() => {
                  dispatch(Three(3));
                }}
              >
                3
              </button>
            </td>
            <td>
              <button
                style={{ width: 30 }}
                onClick={() => {
                  dispatch(Addition());
                }}
              >
                +
              </button>
            </td>
          </tr>
          <tr>
            <td>
              <button
                style={{ width: 30 }}
                onClick={() => {
                  dispatch(Four(4));
                }}
              >
                4
              </button>
            </td>
            <td>
              <button
                style={{ width: 30 }}
                onClick={() => {
                  dispatch(Five(5));
                }}
              >
                5
              </button>
            </td>
            <td>
              <button
                style={{ width: 30 }}
                onClick={() => {
                  dispatch(Six(6));
                }}
              >
                6
              </button>
            </td>
            <td>
              <button
                style={{ width: 30 }}
                onClick={() => {
                  dispatch(Subtraction());
                }}
              >
                -
              </button>
            </td>
          </tr>
          <tr>
            <td>
              <button
                style={{ width: 30 }}
                onClick={() => {
                  dispatch(Seven(7));
                }}
              >
                7
              </button>
            </td>
            <td>
              <button
                style={{ width: 30 }}
                onClick={() => {
                  dispatch(Eight(8));
                }}
              >
                8
              </button>
            </td>
            <td>
              <button
                style={{ width: 30 }}
                onClick={() => {
                  dispatch(Nine(9));
                }}
              >
                9
              </button>
            </td>
            <td>
              <button
                style={{ width: 30 }}
                onClick={() => {
                  dispatch(Multiplication());
                }}
              >
                *
              </button>
            </td>
          </tr>
          <tr>
            <td>
              <button
                style={{ width: 30 }}
                onClick={() => {
                  dispatch(Madulo());
                }}
              >
                %
              </button>
            </td>
            <td>
              <button
                style={{ width: 30 }}
                onClick={() => {
                  dispatch(Division());
                }}
              >
                /
              </button>
            </td>
            <td>
              <button
                style={{ width: 30 }}
                onClick={() => {
                  dispatch(Zero(0));
                }}
              >
                0
              </button>
            </td>
            <td>
              <button
                style={{ width: 30 }}
                onClick={() => {
                  dispatch(Total());
                }}
              >
                =
              </button>
            </td>
          </tr>
        </table>
      </center>
    </div>
  );
};
export default Calculater;
