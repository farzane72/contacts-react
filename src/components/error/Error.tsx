import { useNavigate, useRouteError } from 'react-router-dom';

type ErrorType={
  data?:string,
  message?:string,
}
function NotFound() {
  const navigate = useNavigate();
  const error=useRouteError() as ErrorType;
  console.log(error);

  return (
    <div className='text-white bg-slate-800/95 min-h-screen flex flex-col items-center justify-center gap-8'>
      <h1>Something went wrong 😢</h1>
      <p> {error.data||error.message} </p>
      <button onClick={() => navigate(-1)}>&larr; Go back</button>
    </div>
  );
}

export default NotFound;
