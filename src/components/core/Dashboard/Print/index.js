import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import React, { useRef } from "react";


// npm install react-to-print (please install)
import { useReactToPrint } from "react-to-print";


export default function Userlisting() {
    const { user, } = useSelector(
        (state) => state.profile
    )


    const navigate = useNavigate()

    const conponentPDF = useRef();


    const generatePDF = useReactToPrint({
        content: () => conponentPDF.current,
        documentTitle: "Userdata",
        onAfterPrint: () => {
            alert("Data saved in PDF")
            navigate("/dashboard/my-profile")
        }

    });

    if ((user?.score) === null) {
        return (
            (<div>
                <p className="  text-richblack-300 font-bold" >Give the exam first</p>

            </div>)

        );
    } else {
        return (
            <React.Fragment>
                <div className="container">
                    {(user?.score) < 7 ? <div>
                        <p className="  text-richblack-300 font-bold">You can give retest. Your performance is not well you got {user?.score} the minimum score recurment is more then 7.</p>
                    </div> : (
                        <div className="row text-richblack-300 font-bold">
                            <div ref={conponentPDF} style={{ width: '100%' }}>
                                {/* <table className="table table-bordered w-[100%] " >
                                    <thead className="bg-light">
                                        <tr>
                                            <th>Licence. No</th>
                                            <th>Name</th>
                                            <th>Email</th>
                                        </tr>
                                    </thead>
                                    <tbody>


                                        <tr >
                                            <td>{user?.token}</td>
                                            <td>{user?.firstName}</td>
                                            <td>{user?.email}</td>
                                        </tr>

                                    </tbody>
                                </table> */}
                                <table className="table table-bordered w-[100%]" style={{ borderCollapse: 'collapse', marginTop: '20px' }}>
    <thead className="bg-light">
        <tr>
            <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>Licence. No</th>
            <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>Name</th>
            <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>Email</th>
        </tr>
    </thead>
    <tbody>
        <tr style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>
            <td>{user?.token}</td>
            <td>{user?.firstName}</td>
            <td>{user?.email}</td>
        </tr>
    </tbody>
</table>

                            </div>
                            <div className="d-grid d-md-flex justify-content-md-end mt-6 mb-3">
                                <button className=" flex items-center bg-yellow-50 cursor-pointer gap-x-2 rounded-md py-2 px-5 font-semibold text-richblack-900 " onClick={generatePDF}>PDF</button>
                            </div>
                        </div>)}
                </div>



            </React.Fragment>
        );

    }


}
