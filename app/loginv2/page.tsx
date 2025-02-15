"use client"

import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { fetchUserInfo } from '../../store/authSlice';

const UserProfile: React.FC = () => {
  const dispatch = useAppDispatch();
  const { user, loading, error } = useAppSelector((state) => state.auth);

  useEffect(() => {
    dispatch(fetchUserInfo());
  }, [dispatch]);

  if (loading) return <p>กำลังโหลด...</p>;
  if (error) return <p>เกิดข้อผิดพลาด: {error}</p>;

  return (
    <div>
      {user ? (
        <>
          <h1>สวัสดี, {user.username}</h1>
          <p>ID: {user.id}</p>
        </>
      ) : (
        <p>ไม่พบข้อมูลผู้ใช้</p>
      )}
    </div>
  );
};

export default UserProfile;
