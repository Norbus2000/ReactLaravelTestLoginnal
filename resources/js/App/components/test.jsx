import { Button } from '@mui/material';
import kep from '../../../../storage/app/public/Images/erdo.png';
function TestComponent() {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card">
            <div className="card-header">Test Component</div>
            <Button variant="outlined">Gomb</Button>
            <img src={kep} alt="Logo" />;
          </div>
        </div>
      </div>
    </div>
  );
}

export default TestComponent;
