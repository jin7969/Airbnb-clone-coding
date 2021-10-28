import BasicHost from './BasicHost';
import ResHost from './ResHost';

function Hosting({ responsive }) {
  return (
    <>
      {responsive
        ? <ResHost />
        : <BasicHost />
      }
    </>
  )
}

export default Hosting;