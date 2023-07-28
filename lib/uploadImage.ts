import { ID, storage } from "@/appwrite";

const uploadImage = async (file: File) => {
    if (!file) return;

    const fileUploaded = await storage.createFile(
        "64b85670b98941c30bc5",
        ID.unique(),
        file
    );

    return fileUploaded;
};

export default uploadImage;