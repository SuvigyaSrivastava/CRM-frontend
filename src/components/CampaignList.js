import React from 'react';

const CampaignList = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <div style={{ width: '50%' }}>
        <div className="card" style={{ margin: '10px', padding: '20px', border: '1px solid #ccc', borderRadius: '5px', boxShadow: '0 2px 5px rgba(0,0,0,0.1)' }}>
          <h2>Campaigns</h2>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid #ccc' }}>
                <th style={{ padding: '10px', textAlign: 'left' }}>Customer Name</th>
                <th style={{ padding: '10px', textAlign: 'left' }}>Total Amount Spent</th>
                <th style={{ padding: '10px', textAlign: 'left' }}>Status</th>
              </tr>
            </thead>
            <tbody>
              {/* Example rows, replace with actual data */}
              <tr style={{ borderBottom: '1px solid #ccc' }}>
                <td style={{ padding: '10px' }}>Test 2</td>
                <td style={{ padding: '10px' }}>200</td>
                <td style={{ padding: '10px' }}>Sent</td>
              </tr>
              <tr style={{ borderBottom: '1px solid #ccc' }}>
                <td style={{ padding: '10px' }}>Test 1</td>
                <td style={{ padding: '10px' }}>100</td>
                <td style={{ padding: '10px' }}>Sent</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CampaignList;
