import '../../App.css'
import NameSection from './NameSection';
import NavigationActions from './NavigationActions';

function PageHeader() {
  return (
    <div className="page-header d-flex justify-content-between py-4">
      <NameSection/>
      <NavigationActions />
    </div>
  );
}

export default PageHeader;
