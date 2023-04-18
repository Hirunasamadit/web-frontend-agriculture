import React from 'react';
import TopNavigationBar from '../components/common/TopNavigationBar';
import SearchBar from '../components/All seller/Sellersearch';
import SellerCard from '../components/All seller/SellerCard'

const AllSellers = () => {
  return (
    <>
      <TopNavigationBar />
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px', marginTop: '60px', marginLeft: '25px' }}>
        <h2 style={{ fontFamily: 'Khula', fontSize: '24px', marginRight: 'auto' }}>All Sellers</h2>
        <SearchBar />
      </div>
      <SellerCard />
    </>
  );
};

export default AllSellers;
