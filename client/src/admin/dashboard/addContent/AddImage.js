import React, {} from 'react';

export const AddImage = ({setImage}) => {

    // -- IMAGE SELECTOR  -- //
    // const handlePictureClick = () => { document.querySelector('#fileSelector').click(); }

    const handleFileChange = async (e) => {
        const file = e.target.files[0];  // console.log(file);

        if(file) {
            const url = await StartUploading(file);
            setImage(url); // console.log('url ::', url);
        }
    }

    const StartUploading = async (file) => {
        const cloudUrl = 'https://api.cloudinary.com/v1_1/jcboy/upload';
        const formData = new FormData();

        formData.append('file', file);
        formData.append('upload_preset', 'mauritius');

        try {
            const resp = await fetch(cloudUrl, {method: 'POST', body: formData} );

            if(resp.ok) {
                const cloudResp = await resp.json();
                return cloudResp.secure_url;

            } else {
                throw await resp.json();
            }


        } catch (err) {
            console.error(err)  // or throw err
        }
    }

    return (
        <>
            {/*<button onClick={handlePictureClick} type="button" className="btn btn-primary">ddd</button>*/}
            <input onChange={handleFileChange} id="fileSelector" name="file" type="file" />
        </>
    )

}