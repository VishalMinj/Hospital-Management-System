export default function ConfirmEmail() {
    return (
      <>
      <form className='flex flex-col bg-[#FFFFFF] w-[86%] border rounded-[1rem] py-[2.5rem] px-[1.25rem] gap-[1rem] pb-[3rem] max-w-[22.5rem]'>
        <h2 className="text-[2rem] font-semibold text-gray-900">Resend</h2>

        <p className="text-gray-800 text-[0.71rem]">
        Kindly enter the email address where you would like to receive the activation link.
        </p>

        <div>
          <label className="text-gray-700 font-medium mb-[0.4rem]"></label>
          <input
            type="text"
            className="w-full px-[0.75rem] py-[0.5rem] border rounded-[0.5rem]" placeholder="example@gmail.com"/>
        </div>

        <button type="submit" className="w-full bg-[#118B50] mt-[0.1rem] text-white py-[0.5rem] rounded-[0.5rem] hover:bg-[#0e7a45] transition text-[1rem] sm:text-[0.875rem]">
          Resend
        </button>
        
      </form>
      </>
    );
  };
  