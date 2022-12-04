import React from "react";
import ReactDOM from "react-dom/client";
import TestComponent from "./App/components/test";

function ReactApp() {
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header">Hello World</div>
                        <TestComponent />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ReactApp;

if (document.getElementById("Helloreact")) {
    const Index = ReactDOM.createRoot(document.getElementById("Helloreact"));

    Index.render(
        <React.StrictMode>
            <ReactApp />
        </React.StrictMode>
    );
}
