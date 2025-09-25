import { Button, ConfigProvider, Layout, Modal, Table, theme } from 'antd';
import useModal from 'antd/es/modal/useModal';
import { getExecutions } from './services/apiExecutions';
import { useEffect, useState } from 'react';

function App() {
  const [executions, setExecutions] = useState([])
  const [modal, context] = useModal()
  
  useEffect(() => {
    getExecutions().then(setExecutions);
  }, [])

  const openModal = (item) => {
    console.log(item)
    modal.info({title: "Output", content: item.output})
  }


  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Nome do Robô',
      dataIndex: 'robot_name',
      key: 'robot_name',
    },
    {
      title: 'Data',
      dataIndex: 'start_time',
      key: 'start_time',
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
    },
    {
      title: 'Ação',
      key: "acao",
      render: (item) => (<Button type='primary' onClick={() => openModal(item)}>Ver output</Button>)
      
    },
  ];

  return (
    <ConfigProvider
      theme={{ algorithm: theme.darkAlgorithm }}
    >
      {context}
      <Layout style={{ minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Table dataSource={executions} columns={columns} pagination={{ pageSize: 2}} />
      </Layout>
    </ConfigProvider>
  );
}

export default App;
