import { storage } from "@/appwrite";

const getUrl = async (image: Image) => {
    const url = storage.getFile(image.bucketId, image.fileId);

    return url;
};

export default getUrl;