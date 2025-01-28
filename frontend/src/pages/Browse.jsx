


// import { useDispatch, useSelector } from 'react-redux';
// import { setSearchedQuery } from '@/redux/jobSlice';


// const randomJobs = [1, 2,45];

const Browse = () => {
    // useGetAllJobs();
    // const {allJobs} = useSelector(store=>store.job);
    // const dispatch = useDispatch();
    // useEffect(()=>{
    //     return ()=>{
    //         dispatch(setSearchedQuery(""));
    //     }
    // },[])
    return (
        <div>
           <h1>hello</h1>
            {/* <div >
                <h1 >Search Results ({allJobs.length})</h1>
                <div >
                    {
                        allJobs.map((job) => {
                            return (
                                <job key={job._id} job={job}/>
                            )
                        })
                    }
                </div>

            </div> */}
        </div>
    )
}

export default Browse;