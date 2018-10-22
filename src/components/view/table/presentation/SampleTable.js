import React from 'react';

const SampleTable = () => (
  <div>
    <table className="TableRecords">
      <thead>
        <tr>
          <th className="TableRecords_Header">Head1</th>
          <th className="TableRecords_Header">Head2</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="TableRecords_OddLine">1</td>
          <td className="TableRecords_OddLine">2</td>
        </tr>
        <tr>
          <td className="TableRecords_EvenLine">3</td>
          <td className="TableRecords_EvenLine">4</td>
        </tr>
        <tr>
          <td className="TableRecords_OddLine">5</td>
          <td className="TableRecords_OddLine">6</td>
        </tr>
      </tbody>
    </table>
  </div>
)
export default SampleTable;
