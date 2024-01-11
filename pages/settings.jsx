import React, { useState, useEffect } from 'react';
import Modal from '@/components/Modal';
import { FiUser, FiLogOut, FiGift, FiCreditCard, FiUnlock, FiAlertCircle, FiUserPlus, FiImage, FiSend } from 'react-icons/fi';
import { Transition } from '@headlessui/react';

const Settings = () => {
    const [showNotificationModal, setShowNotificationModal] = useState(false);
    const [showUsernameModal, setShowUsernameModal] = useState(false);
    const [showCashbackModal, setShowCashbackModal] = useState(false);
    const [showChangePasswordModal, setShowChangePasswordModal] = useState(false);

    const openModal = (modal) => {
        switch (modal) {
            case 'notification':
                setShowNotificationModal(true);
                break;
            case 'username':
                setShowUsernameModal(true);
                break;
            case 'cashback':
                setShowCashbackModal(true);
                break;
            case 'changePassword':
                setShowChangePasswordModal(true);
                break;
            default:
                break;
        }
    };

    const closeModal = (modal) => {
        switch (modal) {
            case 'notification':
                setShowNotificationModal(false);
                break;
            case 'username':
                setShowUsernameModal(false);
                break;
            case 'cashback':
                setShowCashbackModal(false);
                break;
            case 'changePassword':
                setShowChangePasswordModal(false);
                break;
            default:
                break;
        }
    };


    useEffect(() => {
        if (showUsernameModal) {
            document.body.style.overflow = 'hidden'; 
        } else {
            document.body.style.overflow = 'auto'; 
        }
    }, [showUsernameModal]);

    return (
        <div className="container mx-auto p-4">
            <div className="flex flex-col md:flex-row items-center justify-between mb-8">
                <div className='mb-4 md:mb-0'>
                    <h1 className="text-2xl font-bold">Profile Settings</h1>
                    <p className='text-gray-400 font-medium'>Welcome: Thealiev_</p>
                </div>
                <div className="w-16 h-16 rounded-full bg-gray-300 flex items-center justify-center">
                    <img className="w-12 h-12 rounded-full" src="https://via.placeholder.com/150" alt="User profile" />
                </div>
            </div>

   
            <div className="bg-white shadow-md rounded px-8 pt-6 pb-8">
                <div className="mb-6">
                    <h2 className="text-lg font-semibold mb-3">Settings</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <button onClick={() => openModal('username')} className="flex items-center">
                            <FiUser className="mr-2" />
                            <span>Username</span>
                        </button>
                        <button onClick={() => openModal('notification')} className="flex items-center">
                            <FiAlertCircle className="mr-2" />
                            <span>Notification</span>
                        </button>
                        <button onClick={() => openModal('cashback')} className="flex items-center">
                            <FiGift className="mr-2" />
                            <span>Cashbacks</span>
                        </button>
                        <button onClick={() => openModal('changePassword')} className="flex items-center">
                            <FiUnlock className="mr-2" />
                            <span>Change Password</span>
                        </button>
                        <button onClick={() => openModal('card')} className="flex items-center">
                            <FiCreditCard className="mr-2" />
                            <span>Add New Card</span>
                        </button>
                    </div>
                </div>
                <div className="border-t pt-10">
                    <h2 className="text-lg font-semibold mb-8">Feedback & Support</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="flex items-center">
                            <FiAlertCircle className="mr-2 cursor-pointer" />
                            <span>Report a Bug</span>
                        </div>
                        <div className="flex items-center">
                            <FiSend className="mr-2 cursor-pointer" />
                            <span>Send Feedback</span>
                        </div>
                    </div>
                </div>

                {showUsernameModal && (
                    <Modal closeModal={() => closeModal('username')}>
                        <div className="text-center">
                            <img
                                className="w-20 h-20 rounded-full mx-auto mb-4"
                                src="https://via.placeholder.com/150"
                                alt="User profile"
                            />
                            <div className="flex flex-col items-center space-y-4">
                                <button className="flex items-center hover:underline">
                                    <FiUnlock className="mr-2" />
                                    <span>Change Password</span>
                                </button>
                                <button className="flex items-center hover:underline">
                                    <FiUserPlus className="mr-2" />
                                    <span>Create New Account</span>
                                </button>
                                <button className="flex items-center hover:underline">
                                    <FiImage className="mr-2" />
                                    <span>Change Avatar</span>
                                </button>
                                <button className="flex items-center hover:underline">
                                    <FiLogOut className="mr-2" />
                                    <span>Log Out</span>
                                </button>
                            </div>
                        </div>
                    </Modal>
                )}
                {showNotificationModal && (
                    <Modal closeModal={() => closeModal('notification')}>
                       
                    </Modal>
                )}
                {showCashbackModal && (
                    <Modal closeModal={() => closeModal('cashback')}>
                       
                    </Modal>
                )}
                {showChangePasswordModal && (
                    <Modal closeModal={() => closeModal('changePassword')}>
                        {/* Change password modal content */}
                        {/* Replace with content as per your requirement */}
                        <h1>Change Password Modal</h1>
                    </Modal>
                )}
            </div>
        </div>
    );
}

export default Settings;
