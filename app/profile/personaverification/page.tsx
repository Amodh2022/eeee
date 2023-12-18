'use client';
import React, { useEffect, useState } from 'react';
import Persona from 'persona';
import { callApi } from '../../_actions/personaupdateapi';
import { useRouter } from 'next/navigation';


const InlineInquiry = () => {
 
    const router = useRouter();
    const [myuserId, setMyuserId] = useState<string | null>(null);

    useEffect(() => {
        const userIdFromStorage = localStorage.getItem('userId');
        if (userIdFromStorage) {
            setMyuserId(userIdFromStorage);
        }
    }, []);

 

    const handleComplete = async ({ inquiryId, status, fields }: any) => {
        try {
            if (status === 'completed') {
                await callApi(inquiryId, myuserId);
                router.push('/profile'); 
            }
        } catch (e) {
            console.error("Error in handleComplete:", e);
            throw Error(e);
        }
    };


    return (
        <div className='h-screen flex justify-center'>
            <Persona.Inquiry
                templateId='itmpl_oFwr5vDFxPnJVnpKmXpgxY5x'
                environmentId='env_3gPXHtfowwicvW8eh5GdW9PV'
                onComplete={handleComplete}
            />
        </div>
    );
};


export default InlineInquiry;
