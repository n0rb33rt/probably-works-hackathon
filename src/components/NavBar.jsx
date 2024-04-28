import { NavLink, useLocation } from "react-router-dom";
export default function NavBar() {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path;
  };
  return (
    <div className="  w-11/12 h-20 rounded-[120px] px-10 py-5 fixed bottom-4 z-30 right-4 backdrop-blur-3xl bg-slate-700/30">
      <nav>
        <ul className="flex justify-between">
          <li>
            <NavLink to="/home" className="flex flex-col items-center ">
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_71_493)">
                  <path
                    d="M6.75 15.75V10.2C6.75 9.78001 6.75 9.56999 6.83175 9.40956C6.90365 9.26843 7.01839 9.1537 7.15951 9.08179C7.31994 9.00005 7.52996 9.00005 7.95 9.00005H10.05C10.47 9.00005 10.6801 9.00005 10.8405 9.08179C10.9816 9.1537 11.0963 9.26843 11.1683 9.40956C11.25 9.56999 11.25 9.78001 11.25 10.2V15.75M8.26327 2.07306L3.17654 6.0294C2.83652 6.29387 2.6665 6.4261 2.54402 6.5917C2.43552 6.73839 2.3547 6.90365 2.30552 7.07935C2.25 7.2777 2.25 7.49308 2.25 7.92385V13.35C2.25 14.1901 2.25 14.6102 2.41349 14.931C2.5573 15.2133 2.78677 15.4427 3.06901 15.5866C3.38988 15.75 3.80992 15.75 4.65 15.75H13.35C14.1901 15.75 14.6101 15.75 14.931 15.5866C15.2132 15.4427 15.4427 15.2133 15.5865 14.931C15.75 14.6102 15.75 14.1901 15.75 13.35V7.92385C15.75 7.49308 15.75 7.2777 15.6945 7.07935C15.6453 6.90365 15.5645 6.73839 15.456 6.5917C15.3335 6.4261 15.1635 6.29387 14.8235 6.02941L9.73673 2.07306C9.47324 1.86812 9.34149 1.76565 9.19601 1.72626C9.06765 1.69151 8.93235 1.69151 8.80399 1.72626C8.65851 1.76565 8.52677 1.86812 8.26327 2.07306Z"
                    stroke={`${isActive("/home") ? "white" : "#A4A4A4"}`}
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
              </svg>
              <p className="text-[11px] font-medium text-white mt-2">Головна</p>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/requests"
              className="flex flex-col items-center text-white"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke={`${isActive("/requests") ? "white" : "#A4A4A4"}`}
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M11.1221 3.02467L3.12597 5.05544C2.32303 5.25936 1.83744 6.07558 2.04136 6.87852L1.31443 7.06324C0.912966 7.1652 0.670167 7.57331 0.772127 7.97478C0.874088 8.37625 1.2822 8.61905 1.68367 8.51709L2.41061 8.33246C2.61458 9.13534 3.43076 9.62089 4.23367 9.41698L6.75001 8.77791L6.75001 9.75098C6.75028 9.88115 6.7712 10.0106 6.80267 10.1367L2.46968 14.4697C2.17678 14.7626 2.17678 15.2374 2.46968 15.5303C2.76257 15.8232 3.23744 15.8232 3.53034 15.5303L7.7273 11.3334C7.88177 11.418 8.05568 11.4871 8.25001 11.5367V16.5C8.25001 16.9142 8.58579 17.25 9.00001 17.25C9.41422 17.25 9.75 16.9142 9.75 16.5V11.5367C9.94433 11.4871 10.1182 11.418 10.2727 11.3334L14.4697 15.5303C14.7626 15.8232 15.2374 15.8232 15.5303 15.5303C15.8232 15.2374 15.8232 14.7626 15.5303 14.4697L11.1973 10.1367C11.2289 10.0103 11.2499 9.88054 11.25 9.74999V7.63505L12.2298 7.38619C12.4337 8.18913 13.25 8.67473 14.0529 8.4708L15.5067 8.10157C16.7111 7.79569 17.4395 6.57136 17.1337 5.36696L16.3952 2.45926C16.0893 1.25486 14.865 0.526461 13.6606 0.832343L12.2067 1.20157C11.4038 1.4055 10.9182 2.22173 11.1221 3.02467ZM14.0298 2.28619L12.576 2.65542L13.6837 7.01696L15.1375 6.64773C15.539 6.54577 15.7818 6.13766 15.6798 5.73619L14.9414 2.8285C14.8394 2.42703 14.4313 2.18423 14.0298 2.28619ZM11.8606 5.93236L11.4914 4.47851L3.4952 6.50929L3.86443 7.96313L11.8606 5.93236ZM8.25001 8.39695V9.73133C8.29182 10.0775 8.72567 10.125 9.00001 10.125C9.27416 10.125 9.70846 10.0753 9.75 9.73133V8.016L8.25001 8.39695Z"
                  fill="#A4A4A4"
                />
              </svg>
              <p className="text-[11px] font-medium text-white mt-2">Запити</p>
            </NavLink>
          </li>
          <li>
            <NavLink to="/profile" className="flex flex-col items-center">
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.00001 11.25C6.62245 11.25 4.50811 12.398 3.16201 14.1795C2.87229 14.5629 2.72743 14.7546 2.73217 15.0137C2.73583 15.2139 2.86153 15.4664 3.01904 15.59C3.2229 15.75 3.50541 15.75 4.07043 15.75H13.9296C14.4946 15.75 14.7771 15.75 14.981 15.59C15.1385 15.4664 15.2642 15.2139 15.2679 15.0137C15.2726 14.7546 15.1277 14.5629 14.838 14.1795C13.4919 12.398 11.3776 11.25 9.00001 11.25Z"
                  stroke={`${isActive("/profile") ? "white" : "#A4A4A4"}`}
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M9.00001 9C10.864 9 12.375 7.48896 12.375 5.625C12.375 3.76104 10.864 2.25 9.00001 2.25C7.13605 2.25 5.62501 3.76104 5.62501 5.625C5.62501 7.48896 7.13605 9 9.00001 9Z"
                  stroke={`${isActive("/profile") ? "white" : "#A4A4A4"}`}
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <p className="text-[11px] font-medium text-white mt-2">Профіль</p>
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}
