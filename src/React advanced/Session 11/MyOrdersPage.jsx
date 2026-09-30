import React from 'react';

const MyOrdersPage = () => {
  const orders = [
    { id: '#1001', item: 'Wireless Headphones', status: 'Delivered', date: '28 Sep 2026' },
    { id: '#1002', item: 'Mechanical Keyboard',  status: 'In Transit', date: '30 Sep 2026' },
    { id: '#1003', item: 'USB-C Hub',            status: 'Processing', date: '30 Sep 2026' },
  ];

  const statusColor = {
    'Delivered':  '#2e7d32',
    'In Transit': '#f57c00',
    'Processing': '#1565c0'
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.heading}>🛒 My Orders</h1>
        <p style={styles.subtext}>
          🔒 This is a <strong>protected page</strong>. Only logged-in users can view their orders.
        </p>
        <table style={styles.table}>
          <thead>
            <tr style={styles.thead}>
              <th style={styles.th}>Order ID</th>
              <th style={styles.th}>Item</th>
              <th style={styles.th}>Date</th>
              <th style={styles.th}>Status</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id} style={styles.tr}>
                <td style={styles.td}>{order.id}</td>
                <td style={styles.td}>{order.item}</td>
                <td style={styles.td}>{order.date}</td>
                <td style={{ ...styles.td, color: statusColor[order.status], fontWeight: 'bold' }}>
                  {order.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '80vh',
    backgroundColor: '#f4f6f9',
    padding: '20px'
  },
  card: {
    background: 'white',
    borderRadius: '12px',
    padding: '40px',
    boxShadow: '0 8px 24px rgba(0,0,0,0.1)',
    width: '100%',
    maxWidth: '600px'
  },
  heading: {
    margin: '0 0 10px',
    color: '#333',
    fontSize: '28px'
  },
  subtext: {
    color: '#666',
    fontSize: '14px',
    marginBottom: '24px'
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse'
  },
  thead: {
    backgroundColor: '#f0f4f8'
  },
  th: {
    padding: '12px 16px',
    textAlign: 'left',
    fontSize: '13px',
    color: '#555',
    textTransform: 'uppercase',
    letterSpacing: '0.5px'
  },
  tr: {
    borderBottom: '1px solid #eee'
  },
  td: {
    padding: '14px 16px',
    fontSize: '15px',
    color: '#444'
  }
};

export default MyOrdersPage;
