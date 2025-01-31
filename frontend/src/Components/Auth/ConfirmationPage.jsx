export default function ConfirmationPage(){
    return(
        <>
            <form className="flex flex-col bg-[#FFFFFF] w-[86%] border rounded-[1rem] py-[2.5rem] px-[1.25rem] gap-[1rem] pb-[3rem] max-w-[22.5rem]">
                <h2 className="text-[1.6rem] font-semibold text-gray-900">Confirmation Page</h2>
                <div>
                <label className="text-gray-700 font-medium mb-[0.5rem] text-[1rem] sm:text-[0.875rem]">Username</label>
                <input type="text" className="w-full px-[0.75rem] py-[0.5rem] outline-none border rounded-[0.5rem] "/>
                </div>

                <div>
                <label className="text-gray-700 font-medium mb-[0.5rem] text-[1rem] sm:text-[0.875rem]">First Name</label>
                <input type="text" className="w-full px-[0.75rem] py-[0.5rem] outline-none border rounded-[0.5rem] "/>
                </div>

                <div>
                <label className="text-gray-700 font-medium mb-[0.5rem] text-[1rem] sm:text-[0.875rem]">Last Name</label>
                <input type="text" className="w-full px-[0.75rem] py-[0.5rem] outline-none border rounded-[0.5rem] "/>
                </div>

                <button type="submit" className="w-full bg-[#118B50] mt-[0.6rem] text-white py-[0.5rem] rounded-[0.5rem] hover:bg-[#0e7a45] transition text-[1rem] sm:text-[0.875rem]">
                    Confirm 
                </button>
            </form>
        </>
    );
}