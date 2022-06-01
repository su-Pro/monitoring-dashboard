import clsx from 'clsx';
interface IPageCardedHeader {
  header?: React.ReactNode
}
const PageCardedHeader: React.FC<IPageCardedHeader> = (props) => {
  if (!props.header) {
    return null
  }
  return (
    <div className={clsx('FusePageCarded-header', 'container')}>
      {props.header}
    </div>
  );
}

export default PageCardedHeader;
