'use client'
import React, { useEffect } from 'react';
import Persona from 'persona';
import { callApi } from '../../_actions/personaupdateapi';
import { useRouter } from 'next/navigation';

// Define the InlineInquiry component
const InlineInquiry: React.FC = () => {
    // Initialize router and userId variables
    const router = useRouter();
    let myuserId: string | null = null;

    // useEffect to get userId from localStorage
    useEffect(() => {
        myuserId = localStorage.getItem('userId');
       
        if (myuserId) {
           
        }
    }, []);

    const divStyle: React.CSSProperties = {
        width: '100%', 
    };

   
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

    // Return the JSX for the component
    return (
        <div className='h-screen flex justify-center' style={divStyle}>
            <Persona.Inquiry
                templateId='itmpl_oFwr5vDFxPnJVnpKmXpgxY5x'
                environmentId='env_3gPXHtfowwicvW8eh5GdW9PV'
                onLoad={() => {
                    console.log('Loaded inline');
                }}
                onComplete={handleComplete}
            />
        </div>
    );
};

// Export the component
export default InlineInquiry;
