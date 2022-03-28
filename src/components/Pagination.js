import { Pagination } from 'react-admin';  

export const PostPagination = props => 
    <Pagination rowsPerPageOptions={[5, 10, 15, 20, 25 ,30]} {...props} />;

export default PostPagination   