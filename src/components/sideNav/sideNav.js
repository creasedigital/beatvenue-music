// imports
import React from "react";
import "./sideNav.scss";

// component
function SideNav() {
  return (
    <>
      {/* sidenav */}
      <aside className="sidenav py-6 px-3 pl-2">
        <nav class="nav">
          <div className="play flex flex-row justify-between px-3 pl-4">
            <div className="button px-5">Just Play</div>
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="svg"
            >
              <path d="M12 15.75C9.93 15.75 8.25 14.07 8.25 12C8.25 9.93 9.93 8.25 12 8.25C14.07 8.25 15.75 9.93 15.75 12C15.75 14.07 14.07 15.75 12 15.75ZM12 9.75C10.76 9.75 9.75 10.76 9.75 12C9.75 13.24 10.76 14.25 12 14.25C13.24 14.25 14.25 13.24 14.25 12C14.25 10.76 13.24 9.75 12 9.75Z" />
              <path d="M15.21 22.1898C15 22.1898 14.79 22.1598 14.58 22.1098C13.96 21.9398 13.44 21.5498 13.11 20.9998L12.99 20.7998C12.4 19.7798 11.59 19.7798 11 20.7998L10.89 20.9898C10.56 21.5498 10.04 21.9498 9.42 22.1098C8.79 22.2798 8.14 22.1898 7.59 21.8598L5.87 20.8698C5.26 20.5198 4.82 19.9498 4.63 19.2598C4.45 18.5698 4.54 17.8598 4.89 17.2498C5.18 16.7398 5.26 16.2798 5.09 15.9898C4.92 15.6998 4.49 15.5298 3.9 15.5298C2.44 15.5298 1.25 14.3398 1.25 12.8798V11.1198C1.25 9.6598 2.44 8.4698 3.9 8.4698C4.49 8.4698 4.92 8.2998 5.09 8.0098C5.26 7.7198 5.19 7.2598 4.89 6.7498C4.54 6.1398 4.45 5.4198 4.63 4.7398C4.81 4.0498 5.25 3.4798 5.87 3.1298L7.6 2.1398C8.73 1.4698 10.22 1.8598 10.9 3.0098L11.02 3.2098C11.61 4.2298 12.42 4.2298 13.01 3.2098L13.12 3.0198C13.8 1.8598 15.29 1.4698 16.43 2.1498L18.15 3.1398C18.76 3.4898 19.2 4.0598 19.39 4.7498C19.57 5.4398 19.48 6.1498 19.13 6.7598C18.84 7.2698 18.76 7.7298 18.93 8.0198C19.1 8.3098 19.53 8.4798 20.12 8.4798C21.58 8.4798 22.77 9.6698 22.77 11.1298V12.8898C22.77 14.3498 21.58 15.5398 20.12 15.5398C19.53 15.5398 19.1 15.7098 18.93 15.9998C18.76 16.2898 18.83 16.7498 19.13 17.2598C19.48 17.8698 19.58 18.5898 19.39 19.2698C19.21 19.9598 18.77 20.5298 18.15 20.8798L16.42 21.8698C16.04 22.0798 15.63 22.1898 15.21 22.1898ZM12 18.4898C12.89 18.4898 13.72 19.0498 14.29 20.0398L14.4 20.2298C14.52 20.4398 14.72 20.5898 14.96 20.6498C15.2 20.7098 15.44 20.6798 15.64 20.5598L17.37 19.5598C17.63 19.4098 17.83 19.1598 17.91 18.8598C17.99 18.5598 17.95 18.2498 17.8 17.9898C17.23 17.0098 17.16 15.9998 17.6 15.2298C18.04 14.4598 18.95 14.0198 20.09 14.0198C20.73 14.0198 21.24 13.5098 21.24 12.8698V11.1098C21.24 10.4798 20.73 9.9598 20.09 9.9598C18.95 9.9598 18.04 9.5198 17.6 8.7498C17.16 7.9798 17.23 6.9698 17.8 5.9898C17.95 5.7298 17.99 5.4198 17.91 5.1198C17.83 4.8198 17.64 4.5798 17.38 4.4198L15.65 3.4298C15.22 3.1698 14.65 3.3198 14.39 3.7598L14.28 3.9498C13.71 4.9398 12.88 5.4998 11.99 5.4998C11.1 5.4998 10.27 4.9398 9.7 3.9498L9.59 3.7498C9.34 3.3298 8.78 3.1798 8.35 3.4298L6.62 4.4298C6.36 4.5798 6.16 4.8298 6.08 5.1298C6 5.4298 6.04 5.7398 6.19 5.9998C6.76 6.9798 6.83 7.9898 6.39 8.7598C5.95 9.5298 5.04 9.9698 3.9 9.9698C3.26 9.9698 2.75 10.4798 2.75 11.1198V12.8798C2.75 13.5098 3.26 14.0298 3.9 14.0298C5.04 14.0298 5.95 14.4698 6.39 15.2398C6.83 16.0098 6.76 17.0198 6.19 17.9998C6.04 18.2598 6 18.5698 6.08 18.8698C6.16 19.1698 6.35 19.4098 6.61 19.5698L8.34 20.5598C8.55 20.6898 8.8 20.7198 9.03 20.6598C9.27 20.5998 9.47 20.4398 9.6 20.2298L9.71 20.0398C10.28 19.0598 11.11 18.4898 12 18.4898Z" />
            </svg>
          </div>

          <div className="items mt-7">
            <div className="item item--active mt-4 flex flex-row px-3 pl-4 py-2">
              <div>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="svg"
                >
                  <path d="M17.5999 22.5601H6.39985C4.57984 22.5601 2.91985 21.1601 2.61985 19.3601L1.28984 11.4001C1.07984 10.1601 1.67985 8.57011 2.66985 7.78011L9.59986 2.23006C10.9399 1.15006 13.0498 1.16007 14.3998 2.24007L21.3299 7.78011C22.3099 8.57011 22.9099 10.1601 22.7099 11.4001L21.3799 19.3601C21.0799 21.1301 19.3899 22.5601 17.5999 22.5601ZM11.9899 2.94008C11.4599 2.94008 10.9298 3.10005 10.5398 3.41005L3.60985 8.9601C3.03985 9.4201 2.64986 10.4401 2.76986 11.1601L4.09986 19.1201C4.27986 20.1701 5.32984 21.0601 6.39985 21.0601H17.5999C18.6699 21.0601 19.7198 20.1701 19.8998 19.1101L21.2298 11.1501C21.3498 10.4301 20.9499 9.40009 20.3899 8.95009L13.4599 3.41005C13.0599 3.10005 12.5299 2.94008 11.9899 2.94008Z" />
                  <path d="M12 16.25C10.21 16.25 8.75 14.79 8.75 13C8.75 11.21 10.21 9.75 12 9.75C13.79 9.75 15.25 11.21 15.25 13C15.25 14.79 13.79 16.25 12 16.25ZM12 11.25C11.04 11.25 10.25 12.04 10.25 13C10.25 13.96 11.04 14.75 12 14.75C12.96 14.75 13.75 13.96 13.75 13C13.75 12.04 12.96 11.25 12 11.25Z" />
                </svg>
              </div>
              <div className="ml-3 mt-1">Home</div>
            </div>
            <div className="item mt-4 flex flex-row px-3 pl-4">
              <div>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="svg"
                >
                  <path d="M6.28016 22.7498C4.15016 22.7498 2.41016 21.0098 2.41016 18.8798C2.41016 16.7498 4.15016 15.0098 6.28016 15.0098C8.41016 15.0098 10.1502 16.7498 10.1502 18.8798C10.1502 21.0098 8.41016 22.7498 6.28016 22.7498ZM6.28016 16.5098C4.97016 16.5098 3.91016 17.5698 3.91016 18.8798C3.91016 20.1898 4.97016 21.2498 6.28016 21.2498C7.59016 21.2498 8.65016 20.1898 8.65016 18.8798C8.65016 17.5698 7.59016 16.5098 6.28016 16.5098Z" />
                  <path d="M9.40039 19.6301C8.99039 19.6301 8.65039 19.2901 8.65039 18.8801V6.30013C8.65039 4.72013 9.60039 3.48013 11.1204 3.07013L17.3604 1.37013C18.6304 1.02013 19.7004 1.15013 20.4504 1.73013C21.2104 2.31013 21.5904 3.28013 21.5904 4.61013V16.8101C21.5904 17.2201 21.2504 17.5601 20.8404 17.5601C20.4304 17.5601 20.0904 17.2201 20.0904 16.8101V4.60013C20.0904 4.02013 19.9904 3.26013 19.5404 2.92013C19.0504 2.54013 18.2104 2.69013 17.7504 2.82013L11.5104 4.52013C10.6404 4.76013 10.1504 5.41013 10.1504 6.31013V18.8901C10.1504 19.2901 9.81039 19.6301 9.40039 19.6301Z" />
                  <path d="M17.7196 20.6702C15.5896 20.6702 13.8496 18.9302 13.8496 16.8002C13.8496 14.6702 15.5896 12.9302 17.7196 12.9302C19.8496 12.9302 21.5896 14.6702 21.5896 16.8002C21.5896 18.9302 19.8496 20.6702 17.7196 20.6702ZM17.7196 14.4302C16.4096 14.4302 15.3496 15.4902 15.3496 16.8002C15.3496 18.1102 16.4096 19.1702 17.7196 19.1702C19.0296 19.1702 20.0896 18.1102 20.0896 16.8002C20.0896 15.4902 19.0296 14.4302 17.7196 14.4302Z" />
                  <path d="M9.3998 10.2698C9.0698 10.2698 8.7698 10.0498 8.6798 9.71978C8.5698 9.31978 8.7998 8.89978 9.1998 8.78978L20.6398 5.66978C21.0398 5.55978 21.4498 5.79978 21.5598 6.19978C21.6698 6.59978 21.4298 7.00978 21.0298 7.11978L9.5998 10.2398C9.5298 10.2598 9.4598 10.2698 9.3998 10.2698Z" />
                </svg>
              </div>
              <div className="ml-3 mt-1">Compilation</div>
            </div>
            <div className="item mt-4 flex flex-row px-3 pl-4">
              <div>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="svg"
                >
                  <path d="M12.0199 20.5299C9.68987 20.5299 7.35987 20.1599 5.14987 19.4199C4.30987 19.1299 3.66987 18.5399 3.38987 17.7699C3.09987 16.9999 3.19987 16.1499 3.65987 15.3899L4.80987 13.4799C5.04987 13.0799 5.26987 12.2799 5.26987 11.8099V8.91992C5.26987 5.19992 8.29987 2.16992 12.0199 2.16992C15.7399 2.16992 18.7699 5.19992 18.7699 8.91992V11.8099C18.7699 12.2699 18.9899 13.0799 19.2299 13.4899L20.3699 15.3899C20.7999 16.1099 20.8799 16.9799 20.5899 17.7699C20.2999 18.5599 19.6699 19.1599 18.8799 19.4199C16.6799 20.1599 14.3499 20.5299 12.0199 20.5299ZM12.0199 3.66992C9.12987 3.66992 6.76987 6.01992 6.76987 8.91992V11.8099C6.76987 12.5399 6.46987 13.6199 6.09987 14.2499L4.94987 16.1599C4.72987 16.5299 4.66987 16.9199 4.79987 17.2499C4.91987 17.5899 5.21987 17.8499 5.62987 17.9899C9.80987 19.3899 14.2399 19.3899 18.4199 17.9899C18.7799 17.8699 19.0599 17.5999 19.1899 17.2399C19.3199 16.8799 19.2899 16.4899 19.0899 16.1599L17.9399 14.2499C17.5599 13.5999 17.2699 12.5299 17.2699 11.7999V8.91992C17.2699 6.01992 14.9199 3.66992 12.0199 3.66992Z" />
                  <path d="M13.8796 3.94018C13.8096 3.94018 13.7396 3.93018 13.6696 3.91018C13.3796 3.83018 13.0996 3.77018 12.8296 3.73018C11.9796 3.62018 11.1596 3.68018 10.3896 3.91018C10.1096 4.00018 9.80963 3.91018 9.61963 3.70018C9.42963 3.49018 9.36963 3.19018 9.47963 2.92018C9.88963 1.87018 10.8896 1.18018 12.0296 1.18018C13.1696 1.18018 14.1696 1.86018 14.5796 2.92018C14.6796 3.19018 14.6296 3.49018 14.4396 3.70018C14.2896 3.86018 14.0796 3.94018 13.8796 3.94018Z" />
                  <path d="M12.0195 22.8101C11.0295 22.8101 10.0695 22.4101 9.36953 21.7101C8.66953 21.0101 8.26953 20.0501 8.26953 19.0601H9.76953C9.76953 19.6501 10.0095 20.2301 10.4295 20.6501C10.8495 21.0701 11.4295 21.3101 12.0195 21.3101C13.2595 21.3101 14.2695 20.3001 14.2695 19.0601H15.7695C15.7695 21.1301 14.0895 22.8101 12.0195 22.8101Z" />
                </svg>
              </div>
              <div className="ml-3 mt-1">Notifications</div>
            </div>
            <div className="item mt-4 flex flex-row px-3 pl-4">
              <div>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="svg"
                >
                  <path d="M9.98999 22.78C9.38999 22.78 8.81999 22.48 8.42999 21.95L7.23001 20.35C7.23001 20.36 7.18 20.33 7.16 20.33H6.79001C3.37001 20.33 1.25 19.4 1.25 14.79V10.79C1.25 6.58001 3.82001 5.48001 5.98001 5.29001C6.22001 5.26001 6.50001 5.25 6.79001 5.25H13.19C16.81 5.25 18.73 7.17001 18.73 10.79V14.79C18.73 15.08 18.72 15.36 18.68 15.63C18.5 17.76 17.4 20.33 13.19 20.33H12.79L11.55 21.95C11.16 22.48 10.59 22.78 9.98999 22.78ZM6.79001 6.75C6.56001 6.75 6.34 6.76 6.13 6.78C3.81 6.98 2.75 8.25001 2.75 10.79V14.79C2.75 18.22 3.81001 18.83 6.79001 18.83H7.19C7.64 18.83 8.14999 19.08 8.42999 19.44L9.63 21.05C9.85001 21.35 10.13 21.35 10.35 21.05L11.55 19.45C11.84 19.06 12.3 18.83 12.79 18.83H13.19C15.73 18.83 17 17.76 17.19 15.48C17.22 15.24 17.23 15.02 17.23 14.79V10.79C17.23 8.00001 15.98 6.75 13.19 6.75H6.79001Z" />
                  <path d="M9.99023 14.1899C9.43023 14.1899 8.99023 13.7399 8.99023 13.1899C8.99023 12.6399 9.44023 12.1899 9.99023 12.1899C10.5402 12.1899 10.9902 12.6399 10.9902 13.1899C10.9902 13.7399 10.5502 14.1899 9.99023 14.1899Z" />
                  <path d="M13.1895 14.1899C12.6295 14.1899 12.1895 13.7399 12.1895 13.1899C12.1895 12.6399 12.6395 12.1899 13.1895 12.1899C13.7395 12.1899 14.1895 12.6399 14.1895 13.1899C14.1895 13.7399 13.7395 14.1899 13.1895 14.1899Z" />
                  <path d="M6.80078 14.1899C6.24078 14.1899 5.80078 13.7399 5.80078 13.1899C5.80078 12.6399 6.25078 12.1899 6.80078 12.1899C7.35078 12.1899 7.80078 12.6399 7.80078 13.1899C7.80078 13.7399 7.35078 14.1899 6.80078 14.1899Z" />
                  <path d="M17.9396 16.29C17.7396 16.29 17.5396 16.21 17.3996 16.06C17.2396 15.9 17.1697 15.67 17.1997 15.45C17.2297 15.24 17.2396 15.02 17.2396 14.79V10.79C17.2396 8.00001 15.9897 6.75 13.1997 6.75H6.79963C6.56963 6.75 6.34966 6.76 6.13966 6.78C5.91966 6.81 5.68964 6.72999 5.52964 6.57999C5.36964 6.41999 5.27963 6.20001 5.29963 5.98001C5.47963 3.82001 6.58963 1.25 10.7996 1.25H17.1997C20.8197 1.25 22.7396 3.17001 22.7396 6.79001V10.79C22.7396 15 20.1697 16.1 18.0097 16.29C17.9797 16.29 17.9596 16.29 17.9396 16.29ZM6.91966 5.25H13.1896C16.8096 5.25 18.7297 7.17001 18.7297 10.79V14.66C20.4297 14.24 21.2297 12.99 21.2297 10.79V6.79001C21.2297 4.00001 19.9796 2.75 17.1896 2.75H10.7897C8.58965 2.75 7.34966 3.55 6.91966 5.25Z" />
                </svg>
              </div>
              <div className="ml-3 mt-1">Chat</div>
            </div>
            <div className="item mt-4 flex flex-row px-3 pl-4">
              <div>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="svg"
                >
                  <path d="M11 20.75C5.62 20.75 1.25 16.38 1.25 11C1.25 5.62 5.62 1.25 11 1.25C16.38 1.25 20.75 5.62 20.75 11C20.75 16.38 16.38 20.75 11 20.75ZM11 2.75C6.45 2.75 2.75 6.45 2.75 11C2.75 15.55 6.45 19.25 11 19.25C15.55 19.25 19.25 15.55 19.25 11C19.25 6.45 15.55 2.75 11 2.75Z" />
                  <path d="M20.1601 22.79C20.0801 22.79 20.0001 22.78 19.9301 22.77C19.4601 22.71 18.6101 22.39 18.1301 20.96C17.8801 20.21 17.9701 19.46 18.3801 18.89C18.7901 18.32 19.4801 18 20.2701 18C21.2901 18 22.0901 18.39 22.4501 19.08C22.8101 19.77 22.7101 20.65 22.1401 21.5C21.4301 22.57 20.6601 22.79 20.1601 22.79ZM19.5601 20.49C19.7301 21.01 19.9701 21.27 20.1301 21.29C20.2901 21.31 20.5901 21.12 20.9001 20.67C21.1901 20.24 21.2101 19.93 21.1401 19.79C21.0701 19.65 20.7901 19.5 20.2701 19.5C19.9601 19.5 19.7301 19.6 19.6001 19.77C19.4801 19.94 19.4601 20.2 19.5601 20.49Z" />
                </svg>
              </div>
              <div className="ml-3 mt-1">Search</div>
            </div>
            <div className="item mt-4 flex flex-row px-3 pl-4">
              <div>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="svg"
                >
                  <path d="M3.5 18.75C3.09 18.75 2.75 18.41 2.75 18V7C2.75 2.59 4.09 1.25 8.5 1.25H15.5C19.91 1.25 21.25 2.59 21.25 7V17C21.25 17.16 21.25 17.31 21.24 17.47C21.21 17.88 20.84 18.2 20.44 18.17C20.03 18.14 19.71 17.78 19.74 17.37C19.75 17.25 19.75 17.12 19.75 17V7C19.75 3.43 19.08 2.75 15.5 2.75H8.5C4.92 2.75 4.25 3.43 4.25 7V18C4.25 18.41 3.91 18.75 3.5 18.75Z" />
                  <path d="M17 22.75H7C4.66 22.75 2.75 20.84 2.75 18.5V17.85C2.75 15.86 4.37 14.25 6.35 14.25H20.5C20.91 14.25 21.25 14.59 21.25 15V18.5C21.25 20.84 19.34 22.75 17 22.75ZM6.35 15.75C5.19 15.75 4.25 16.69 4.25 17.85V18.5C4.25 20.02 5.48 21.25 7 21.25H17C18.52 21.25 19.75 20.02 19.75 18.5V15.75H6.35Z" />
                  <path d="M16 7.75H8C7.59 7.75 7.25 7.41 7.25 7C7.25 6.59 7.59 6.25 8 6.25H16C16.41 6.25 16.75 6.59 16.75 7C16.75 7.41 16.41 7.75 16 7.75Z" />
                  <path d="M13 11.25H8C7.59 11.25 7.25 10.91 7.25 10.5C7.25 10.09 7.59 9.75 8 9.75H13C13.41 9.75 13.75 10.09 13.75 10.5C13.75 10.91 13.41 11.25 13 11.25Z" />
                </svg>
              </div>
              <div className="ml-3 mt-1">Library</div>
            </div>
            <div className="item mt-6 flex flex-row px-3 pl-4">
              <div>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="svg svg--liked"
                >
                  <path d="M16.44 3.10156C14.63 3.10156 13.01 3.98156 12 5.33156C10.99 3.98156 9.37 3.10156 7.56 3.10156C4.49 3.10156 2 5.60156 2 8.69156C2 9.88156 2.19 10.9816 2.52 12.0016C4.1 17.0016 8.97 19.9916 11.38 20.8116C11.72 20.9316 12.28 20.9316 12.62 20.8116C15.03 19.9916 19.9 17.0016 21.48 12.0016C21.81 10.9816 22 9.88156 22 8.69156C22 5.60156 19.51 3.10156 16.44 3.10156Z" />
                </svg>
              </div>
              <div className="ml-3 mt-1">Liked Songs</div>
            </div>
          </div>

          <div className="playlists mt-8">
            <div className="heading flex flex-row justify-between px-3 pl-4">
              PLAYLISTS
            </div>
            <div className="item mt-4 px-3 pl-4">Kid Cudi Zone</div>
            <div className="item mt-3 px-3 pl-4">British Rock</div>
            <div className="item mt-3 px-3 pl-4">Disco Elysium</div>
          </div>
        </nav>
      </aside>
    </>
  );
}

// export
export default SideNav;
