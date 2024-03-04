import {RotatingLines} from "react-loader-spinner";

const BlogLoading = ({isLoading=true}) => {
  return(
    <RotatingLines
      strokeColor="grey"
      strokeWidth="5"
      animationDuration="0.75"
      width="50"
      visible={isLoading}
    />
  )
}

export default BlogLoading;
