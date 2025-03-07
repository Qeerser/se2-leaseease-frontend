'use client';
import { use, useEffect, useState } from 'react';
import { uploadImage } from '@/store/authSlice';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { useAuth } from '@/hooks/useAuth';

export default function UploadComponent() {
    const dispatch = useAppDispatch();
    const uploadUrl = useAppSelector((state) => state.auth.user?.image_url);
    const { user } = useAuth();

    async function handleUpload(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);

        try {
            await dispatch(uploadImage(formData));
            alert('Upload successful!');
        } catch (error) {
            console.error('Upload error:', error);
            alert('Upload failed!');
        }
    }



    return (
        <form onSubmit={handleUpload}>
            <input type="file" name="file" required />
            <button type="submit">Upload</button>
            {uploadUrl && (
                <p>
                    Uploaded:{' '}
                    <a href={uploadUrl} target="_blank">
                        {uploadUrl}
                    </a>
                </p>
            )}
        </form>
    );
}
