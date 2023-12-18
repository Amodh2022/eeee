'use client';
import React, { useEffect, useState } from 'react';
import Persona from 'persona';
import { callApi } from '../../_actions/personaupdateapi';
import { useRouter } from 'next/navigation';

// Define the InlineInquiry component
const InlineInquiry: React.FC = () => {
 
    const router = useRouter();
    const [myuserId, setMyuserId] = useState<string | null>(null);

    

 

    const handleComplete = async ({ inquiryId, status, fields }: any) => {
        try {
            if (status === 'completed') {
                // await callApi(inquiryId, myuserId);
                // router.push('/profile'); 
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
