import React, { useState } from 'react';
import AsksModal from '../../components/AsksModals/AsksModal.jsx';
import HelloModal from '../../components/HelloModal/HelloModal.jsx';
import SummaryModal from '../../components/Table/Summary/Summary.jsx';

const ModalComment = () => {
    
    const [isHelloModalVisible, setIsHelloModalVisible] = useState(true);
    const [isAsksModalVisible, setIsAsksModalVisible] = useState(true);

    const summaryData = [
        { month: 'January', amount: '$1000' },
        { month: 'February', amount: '$1500' },
        { month: 'March', amount: '$1200' },
        { month: 'April', amount: '$1800' },
        { month: 'May', amount: '$2000' },
        { month: 'June', amount: '$1700' },
    ];

    return ( 
        <>
            <AsksModal isVisible={isAsksModalVisible} />
            <HelloModal isVisible={isHelloModalVisible} />
            <SummaryModal data={summaryData} />
        </>
    );
  };

  export default ModalComment;