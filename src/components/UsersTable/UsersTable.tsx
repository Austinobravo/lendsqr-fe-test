import React from 'react';
import { IoFilter } from 'react-icons/io5';
import classes from './UsersTable.module.scss';
import { BsEye, BsThreeDotsVertical } from 'react-icons/bs';
import { HiOutlineDotsHorizontal } from 'react-icons/hi';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import FiltersForm from '../FiltersForm/FiltersForm';
import { Link, useNavigate } from 'react-router-dom';
import { TbUserCheck, TbUserX } from 'react-icons/tb';
import  {Data} from '../../../data.json';
import {UserData} from '../../../types/types'

const UsersTable = () => {
    const [isFormOpen, setIsFormOpen] = React.useState(false);
    const [isCardFilterOpen, setIsCardFilterOpen] = React.useState(false);
    const [currentPage, setCurrentPage] = React.useState(1);
    const [itemsPerPage, setItemsPerPage] = React.useState(10);
    const [filteredData] = React.useState(Data);
    const [userData, setUserData] = React.useState({} as UserData)
    const totalPages = Math.ceil(filteredData.length / itemsPerPage);
    const navigate = useNavigate()

    const handlePageChange = (pageNumber:number) => {
        setCurrentPage(pageNumber);
    };

    const handlePrevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const SetContentLocalStorage = (content:UserData) => {
        localStorage.setItem('userDetails', JSON.stringify(content))
        navigate(`/dashboard/users/${content.username}`) 

    }

   


    React.useEffect(() => {
        setCurrentPage(1);
    }, [filteredData]);

    const currentData = filteredData.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

    const renderPageNumbers = () => {
        const pages = [];
        if (totalPages <= 5) {
            for (let i = 1; i <= totalPages; i++) {
                pages.push(
                    <li key={i} onClick={() => handlePageChange(i)} className={currentPage === i ? classes.active : ''}>
                        {i}
                    </li>
                );
            }
        } else {
            pages.push(
                <li key={1} onClick={() => handlePageChange(1)} className={currentPage === 1 ? classes.active : ''}>
                    1
                </li>
            );
            if (currentPage > 3) {
                pages.push(
                    <li key="dots1">
                        <HiOutlineDotsHorizontal />
                    </li>
                );
            }
            if (currentPage > 2) {
                pages.push(
                    <li key={currentPage - 1} onClick={() => handlePageChange(currentPage - 1)}>
                        {currentPage - 1}
                    </li>
                );
            }
            if (currentPage !== 1 && currentPage !== totalPages) {
                pages.push(
                    <li key={currentPage} onClick={() => handlePageChange(currentPage)} className={classes.active}>
                        {currentPage}
                    </li>
                );
            }
            if (currentPage < totalPages - 1) {
                pages.push(
                    <li key={currentPage + 1} onClick={() => handlePageChange(currentPage + 1)}>
                        {currentPage + 1}
                    </li>
                );
            }
            if (currentPage < totalPages - 2) {
                pages.push(
                    <li key="dots2">
                        <HiOutlineDotsHorizontal />
                    </li>
                );
            }
            pages.push(
                <li key={totalPages} onClick={() => handlePageChange(totalPages)} className={currentPage === totalPages ? classes.active : ''}>
                    {totalPages}
                </li>
            );
        }
        return pages;
    };

    return (
        <section className={classes.users_table}>
            <table>
                <thead>
                    <tr>
                        <th>ORGANIZATION <span onClick={() => setIsFormOpen(!isFormOpen)}><IoFilter size={15} /></span></th>
                        <th>USERNAME <span onClick={() => setIsFormOpen(!isFormOpen)}><IoFilter size={15} /></span></th>
                        <th>EMAIL <span onClick={() => setIsFormOpen(!isFormOpen)}><IoFilter size={15} /></span></th>
                        <th>PHONE NUMBER <span onClick={() => setIsFormOpen(!isFormOpen)}><IoFilter size={15} /></span></th>
                        <th>DATE JOINED <span onClick={() => setIsFormOpen(!isFormOpen)}><IoFilter size={15} /></span></th>
                        <th>STATUS <span onClick={() => setIsFormOpen(!isFormOpen)}><IoFilter size={15} /></span></th>
                        <th></th>
                    </tr>
                </thead>

                <tbody>
                    {currentData.map((content, index: number) => (
                        <tr key={index}>
                            <td>{content.organization}</td>
                            <td>{content.username}</td>
                            <td>{content.email}</td>
                            <td>{content.phone}</td>
                            <td>{content.dateJoined}</td>
                            <td>
                                <span className={
                                    content.status === "Inactive" ? classes.users_table__status_inactive :
                                        content.status === "Pending" ? classes.users_table__status_pending :
                                            content.status === "Blacklisted" ? classes.users_table__status_blacklisted :
                                                classes.users_table__status_active
                                }>
                                    {content.status}
                                </span>
                            </td>
                            <td onClick={() => {setIsCardFilterOpen(!isCardFilterOpen),setUserData(content)}}><BsThreeDotsVertical style={{ cursor: "pointer" }} /></td>
                            
                            {/* View Details Modal*/}
                            {isCardFilterOpen && 
                                <>
                                <div className={classes.modal_overlay} onClick={() => setIsCardFilterOpen(false)} />
                                    <div className={classes.card_filter}>
                                        <div>
                                            <BsEye />
                                            <button type='button' onClick={()=>SetContentLocalStorage(userData)}> View Details</button>
                                        </div>
                                        <div>
                                            <TbUserX />
                                            <Link to="#"> Blacklist User</Link>
                                        </div>
                                        <div>
                                            <TbUserCheck />
                                            <Link to="#"> Activate User</Link>
                                        </div>
                                    </div>
                             </>
            }
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className={classes.filter_pagination}>
                <div className={classes.filter_pagination__filter}>
                    <p>Showing </p>
                    <form>
                        <select value={itemsPerPage} onChange={(e) => setItemsPerPage(Number(e.target.value))}>
                            <option value={10}>10</option>
                            <option value={25}>25</option>
                            <option value={50}>50</option>
                            <option value={100}>100</option>
                        </select>
                    </form>
                    <p>out of {filteredData.length}</p>
                </div>
                <div className={classes.filter_pagination__pagination}>
                    <div onClick={handlePrevPage}>
                        <IoIosArrowBack style={{ cursor: currentPage > 1 ? "pointer" : "default" }} />
                    </div>
                    <ul>
                        {renderPageNumbers()}
                    </ul>
                    <div onClick={handleNextPage}>
                        <IoIosArrowForward style={{ cursor: currentPage < totalPages ? "pointer" : "default" }} />
                    </div>
                </div>
            </div>

            {/* Modals */}
            {isFormOpen &&
                <div className={classes.modal_overlay} onClick={() => setIsFormOpen(!isFormOpen)}>
                    <FiltersForm/>
                </div>
            }

           
        </section>
    );
}

export default UsersTable;
