const Footer = () => 
{
    return (
        <>
        <footer className="bg-coolGray-100 text-coolGray-900">
	<div className="container flex flex-col p-4 mx-auto md:p-8 lg:flex-row divide-coolGray-600">
		<div className="self-center py-6 space-y-4 text-center sm:flex sm:space-y-0 sm:justify-around sm:space-x-4 lg:flex-1 lg:justify-start">
			<p>Made with ❤️ by Anjali Rohira @2020.</p>
		</div>
		<div className="flex flex-col justify-center pt-6 lg:pt-0">
			<div className="flex justify-center space-x-4">
				<a href="#" className="flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-violet-600 text-coolGray-50">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" className="w-4 h-4">
						<path d="M16 0c-4.349 0-4.891 0.021-6.593 0.093-1.709 0.084-2.865 0.349-3.885 0.745-1.052 0.412-1.948 0.959-2.833 1.849-0.891 0.885-1.443 1.781-1.849 2.833-0.396 1.020-0.661 2.176-0.745 3.885-0.077 1.703-0.093 2.244-0.093 6.593s0.021 4.891 0.093 6.593c0.084 1.704 0.349 2.865 0.745 3.885 0.412 1.052 0.959 1.948 1.849 2.833 0.885 0.891 1.781 1.443 2.833 1.849 1.020 0.391 2.181 0.661 3.885 0.745 1.703 0.077 2.244 0.093 6.593 0.093s4.891-0.021 6.593-0.093c1.704-0.084 2.865-0.355 3.885-0.745 1.052-0.412 1.948-0.959 2.833-1.849 0.891-0.885 1.443-1.776 1.849-2.833 0.391-1.020 0.661-2.181 0.745-3.885 0.077-1.703 0.093-2.244 0.093-6.593s-0.021-4.891-0.093-6.593c-0.084-1.704-0.355-2.871-0.745-3.885-0.412-1.052-0.959-1.948-1.849-2.833-0.885-0.891-1.776-1.443-2.833-1.849-1.020-0.396-2.181-0.661-3.885-0.745-1.703-0.077-2.244-0.093-6.593-0.093zM16 2.88c4.271 0 4.781 0.021 6.469 0.093 1.557 0.073 2.405 0.333 2.968 0.553 0.751 0.291 1.276 0.635 1.844 1.197 0.557 0.557 0.901 1.088 1.192 1.839 0.22 0.563 0.48 1.411 0.553 2.968 0.072 1.688 0.093 2.199 0.093 6.469s-0.021 4.781-0.099 6.469c-0.084 1.557-0.344 2.405-0.563 2.968-0.303 0.751-0.641 1.276-1.199 1.844-0.563 0.557-1.099 0.901-1.844 1.192-0.556 0.22-1.416 0.48-2.979 0.553-1.697 0.072-2.197 0.093-6.479 0.093s-4.781-0.021-6.48-0.099c-1.557-0.084-2.416-0.344-2.979-0.563-0.76-0.303-1.281-0.641-1.839-1.199-0.563-0.563-0.921-1.099-1.197-1.844-0.224-0.556-0.48-1.416-0.563-2.979-0.057-1.677-0.084-2.197-0.084-6.459 0-4.26 0.027-4.781 0.084-6.479 0.083-1.563 0.339-2.421 0.563-2.979 0.276-0.761 0.635-1.281 1.197-1.844 0.557-0.557 1.079-0.917 1.839-1.199 0.563-0.219 1.401-0.479 2.964-0.557 1.697-0.061 2.197-0.083 6.473-0.083zM16 7.787c-4.541 0-8.213 3.677-8.213 8.213 0 4.541 3.677 8.213 8.213 8.213 4.541 0 8.213-3.677 8.213-8.213 0-4.541-3.677-8.213-8.213-8.213zM16 21.333c-2.948 0-5.333-2.385-5.333-5.333s2.385-5.333 5.333-5.333c2.948 0 5.333 2.385 5.333 5.333s-2.385 5.333-5.333 5.333zM26.464 7.459c0 1.063-0.865 1.921-1.923 1.921-1.063 0-1.921-0.859-1.921-1.921 0-1.057 0.864-1.917 1.921-1.917s1.923 0.86 1.923 1.917z"></path>
					</svg>
				</a>
				<a href="#" className="flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-violet-600 text-coolGray-50">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
				</a>
				<a href="#" className="flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-violet-600 text-coolGray-50">
					<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 32 32" className="w-4 h-4">
						<path d="M31.937 6.093c-1.177 0.516-2.437 0.871-3.765 1.032 1.355-0.813 2.391-2.099 2.885-3.631-1.271 0.74-2.677 1.276-4.172 1.579-1.192-1.276-2.896-2.079-4.787-2.079-3.625 0-6.563 2.937-6.563 6.557 0 0.521 0.063 1.021 0.172 1.495-5.453-0.255-10.287-2.875-13.52-6.833-0.568 0.964-0.891 2.084-0.891 3.303 0 2.281 1.161 4.281 2.916 5.457-1.073-0.031-2.083-0.328-2.968-0.817v0.079c0 3.181 2.26 5.833 5.26 6.437-0.547 0.145-1.131 0.229-1.724 0.229-0.421 0-0.823-0.041-1.224-0.115 0.844 2.604 3.26 4.5 6.14 4.557-2.239 1.755-5.077 2.801-8.135 2.801-0.521 0-1.041-0.025-1.563-0.088 2.917 1.86 6.36 2.948 10.079 2.948 12.067 0 18.661-9.995 18.661-18.651 0-0.276 0-0.557-0.021-0.839 1.287-0.917 2.401-2.079 3.281-3.396z"></path>
					</svg>
				</a>
				<a href="#" className="flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-violet-600 text-coolGray-50">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm2.218 18.616c-.354.069-.468-.149-.468-.336v-1.921c0-.653-.229-1.079-.481-1.296 1.56-.173 3.198-.765 3.198-3.454 0-.765-.273-1.389-.721-1.879.072-.177.312-.889-.069-1.853 0 0-.587-.188-1.923.717-.561-.154-1.159-.231-1.754-.234-.595.003-1.193.08-1.753.235-1.337-.905-1.925-.717-1.925-.717-.379.964-.14 1.676-.067 1.852-.448.49-.722 1.114-.722 1.879 0 2.682 1.634 3.282 3.189 3.459-.2.175-.381.483-.444.936-.4.179-1.413.488-2.037-.582 0 0-.37-.672-1.073-.722 0 0-.683-.009-.048.426 0 0 .46.215.777 1.024 0 0 .405 1.25 2.353.826v1.303c0 .185-.113.402-.462.337-2.782-.925-4.788-3.549-4.788-6.641 0-3.867 3.135-7 7-7s7 3.133 7 7c0 3.091-2.003 5.715-4.782 6.641z"/></svg>
				</a>
				<a href="#" className="flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-violet-600 text-coolGray-50">				</a>
			</div>
		</div>
	</div>
</footer>
        </>
    )
}

export default Footer;

















{/* <div className="flex space-x-4 justify-center w-full md:w-4/12 px-4 mr-auto ml-auto ">
              <div>
              <div className="p-4 pr-6 bg-white border-1-8 border-transparent rounded-md shadow-md space-y-2">
                <img className="w-10 h-10 mx-auto" src="https://image.flaticon.com/icons/png/512/1336/1336494.png" />
                <h2 className="text-lg font-semibold leading-6 text-center">Web Development</h2>
                <p className="text-gray-600 text-center">Quiz on HTML, CSS, JavasScript</p>
              </div>
              <br />

              <div className="p-4 pr-6 bg-white border-1-8 border-transparent rounded-md shadow-md space-y-2">
                <img className="w-10 h-10 mx-auto" src="https://image.flaticon.com/icons/png/512/1688/1688519.png" />
                <h2 className="text-lg font-semibold leading-6 text-center">UX Design</h2>
                <p className="text-gray-600 text-center">Quiz on design fundamentals, research</p>
              </div>
              <br />

              <div className="p-4 pr-6 bg-white border-1-8 border-transparent rounded-md shadow-md space-y-2">
                <img className="w-10 h-10 mx-auto" src="https://img-premium.flaticon.com/png/512/791/premium/791858.png?token=exp=1626787659~hmac=636b74bc3cd82458d033ab2f7537ec01" />
                <h2 className="text-lg font-semibold leading-6 text-center">Marketing</h2>
                <p className="text-gray-600 text-center">Quiz on strategies and basics</p>
              </div>
              </div>
            <div>
            <div className="p-4 pr-6 bg-white border-1-8 border-transparent rounded-md shadow-md space-y-2">
                <img className="w-10 h-10 mx-auto" src="https://img-premium.flaticon.com/png/512/3079/premium/3079941.png?token=exp=1626787758~hmac=61f13df942bf8ac242dbea5fdcce35c6" />
                <h2 className="text-lg font-semibold leading-6 text-center">Content Writing</h2>
                <p className="text-gray-600 text-center">Quiz on Grammar, proficiency in writing</p>
              </div>
              <br />

              <div className="p-4 pr-6 bg-white border-1-8 border-transparent rounded-md shadow-md space-y-2">
                <img className="w-10 h-10 mx-auto" src="https://image.flaticon.com/icons/png/512/3028/3028661.png" />
                <h2 className="text-lg font-semibold leading-6 text-center">Finance</h2>
                <p className="text-gray-600 text-center">Quiz for basics of stock market, quity etc</p>
              </div>
              <br />

              <div className="p-4 pr-6 bg-white border-1-8 border-transparent rounded-md shadow-md space-y-2">
                <img className="w-10 h-10 mx-auto" src="https://img-premium.flaticon.com/png/512/440/premium/440903.png?token=exp=1626788020~hmac=21500b20db56c857f326f3804190026c" />
                <h2 className="text-lg font-semibold leading-6 text-center">Video Editing</h2>
                <p className="text-gray-600 text-center">Quiz for premier pro, AE, GEO Layers etc </p>
              </div>
              
             </div>
            </div> */}