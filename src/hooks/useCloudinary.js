
export const useCloudinary = () => {

    async function handleUpload(e) {
        try {
            const image = e.target.files[0]
            const formData = new FormData()
            formData.append("file", image)
            formData.append("upload_preset", "jdrcloud")
            const response = await fetch(`https://api.cloudinary.com/v1_1/${import.meta.env.VITE_CLOUD_NAME}/image/upload`, {
                method: "POST",
                body: formData
            })
            if (!response.ok) throw new Error("Something happened while upload the photo to cloudinary")
            const data = await response.json()
            const cloudinary_link = data.secure_url
            console.log(cloudinary_link)
            return cloudinary_link;
        } catch (error) {console.log(error)}
    }


    return {
        handleUpload
    }
}

