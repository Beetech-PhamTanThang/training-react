import axiosClient from "./Axios";

const FileService = {
    getFile: async (path: string) => {
        const {data} = await axiosClient.get('/file', {
            params : {
                'filePath' : path
            }
        })
        return data;
    }
}

export default FileService