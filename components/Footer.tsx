import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black/90 text-background backdrop-blur-sm sticky  top-0 z-[999]">
      <div className="flex flex-col sm:flex-row sm:justify-between gap-4 md:gap-8 mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8 items-center align-middle">
        <div className="w-full flex justify-center sm:justify-start">
          <p className="text-xs  font-inter">
            ©️ 2024
            <span className="text-2xl font-syne font-bold"> Menteor </span>:from
            the house of{" "}
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.mirrorfolio.com/"
              className="font-syne"
            >
              Mirrorfolio
            </Link>
          </p>
        </div>
        <div className="flex w-full gap-4 justify-center sm:justify-end">
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.mirrorfolio.com/"
            className="font-syne"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="20"
              height="20"
              viewBox="0,0,256,256"
              className="hover:scale-105 hover:backdrop-blur-sm hover:bg-current/30 rounded-sm"
            >
              <g
                fill="#f8f9ff"
                fillRule="nonzero"
                stroke="none"
                strokeWidth="1"
                strokeLinecap="butt"
                strokeLinejoin="miter"
                strokeMiterlimit="10"
                strokeDasharray=""
                strokeDashoffset="0"
                fontFamily="none"
                fontWeight="none"
                fontSize="none"
                textAnchor="none"
                style={{ mixBlendMode: "normal" }}
              >
                <g transform="scale(5.12,5.12)">
                  <path d="M5.91992,6l14.66211,21.375l-14.35156,16.625h3.17969l12.57617,-14.57812l10,14.57813h12.01367l-15.31836,-22.33008l13.51758,-15.66992h-3.16992l-11.75391,13.61719l-9.3418,-13.61719zM9.7168,8h7.16406l23.32227,34h-7.16406z"></path>
                </g>
              </g>
            </svg>
          </Link>
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.mirrorfolio.com/"
            className="font-syne"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="20"
              height="20"
              viewBox="0,0,256,256"
              className="hover:scale-105 hover:backdrop-blur-sm hover:bg-current/30 rounded-sm"
            >
              <g
                fill="#f8f9ff"
                fillRule="nonzero"
                stroke="none"
                strokeWidth="1"
                strokeLinecap="butt"
                strokeLinejoin="miter"
                strokeMiterlimit="10"
                strokeDasharray=""
                strokeDashoffset="0"
                fontFamily="none"
                fontWeight="none"
                fontSize="none"
                textAnchor="none"
                style={{ mixBlendMode: "normal" }}
              >
                <g transform="scale(5.12,5.12)">
                  <path d="M16,3c-7.16752,0 -13,5.83248 -13,13v18c0,7.16752 5.83248,13 13,13h18c7.16752,0 13,-5.83248 13,-13v-18c0,-7.16752 -5.83248,-13 -13,-13zM16,5h18c6.08648,0 11,4.91352 11,11v18c0,6.08648 -4.91352,11 -11,11h-18c-6.08648,0 -11,-4.91352 -11,-11v-18c0,-6.08648 4.91352,-11 11,-11zM37,11c-1.10457,0 -2,0.89543 -2,2c0,1.10457 0.89543,2 2,2c1.10457,0 2,-0.89543 2,-2c0,-1.10457 -0.89543,-2 -2,-2zM25,14c-6.06329,0 -11,4.93671 -11,11c0,6.06329 4.93671,11 11,11c6.06329,0 11,-4.93671 11,-11c0,-6.06329 -4.93671,-11 -11,-11zM25,16c4.98241,0 9,4.01759 9,9c0,4.98241 -4.01759,9 -9,9c-4.98241,0 -9,-4.01759 -9,-9c0,-4.98241 4.01759,-9 9,-9z"></path>
                </g>
              </g>
            </svg>
          </Link>
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.mirrorfolio.com/"
            className="font-syne"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="20"
              height="20"
              viewBox="0,0,256,256"
              className="hover:scale-105 hover:backdrop-blur-sm hover:bg-current/30 rounded-sm"
            >
              <g
                fill="#f8f9ff"
                fillRule="nonzero"
                stroke="none"
                strokeWidth="1"
                strokeLinecap="butt"
                strokeLinejoin="miter"
                strokeMiterlimit="10"
                strokeDasharray=""
                strokeDashoffset="0"
                fontFamily="none"
                fontWeight="none"
                fontSize="none"
                textAnchor="none"
                style={{ mixBlendMode: "normal" }}
              >
                <g transform="scale(5.12,5.12)">
                  <path d="M8,3.01172c-1.68739,0 -3.16452,0.47991 -4.24609,1.35352c-1.08157,0.8736 -1.74219,2.16798 -1.74219,3.58203c0,2.74357 2.45699,4.8672 5.70508,4.99414c0.09162,0.02933 0.18702,0.04512 0.2832,0.04688c1.75357,0 3.24619,-0.51401 4.3125,-1.42383c1.06631,-0.90981 1.67578,-2.22152 1.67578,-3.61719c-0.00015,-0.01824 -0.0008,-0.03648 -0.00195,-0.05469c-0.15402,-2.76089 -2.61155,-4.88086 -5.98633,-4.88086zM8,4.98828c2.60907,0 3.89588,1.28106 4.00586,2.98438c-0.0071,0.83228 -0.3293,1.53924 -0.97461,2.08984c-0.65244,0.55669 -1.65982,0.94922 -3.03125,0.94922c-2.60195,0 -4.01172,-1.41255 -4.01172,-3.06445c0,-0.82595 0.33939,-1.50502 1.00781,-2.04492c0.66843,-0.5399 1.6913,-0.91406 3.00391,-0.91406zM3,15c-0.55226,0.00006 -0.99994,0.44774 -1,1v29c0.00006,0.55226 0.44774,0.99994 1,1h10c0.55226,-0.00006 0.99994,-0.44774 1,-1v-9.33594v-19.66406c-0.00006,-0.55226 -0.44774,-0.99994 -1,-1zM18,15c-0.55226,0.00006 -0.99994,0.44774 -1,1v29c0.00006,0.55226 0.44774,0.99994 1,1h10c0.55226,-0.00006 0.99994,-0.44774 1,-1v-16v-0.25v-0.25c0,-1.94442 1.55558,-3.5 3.5,-3.5c1.94442,0 3.5,1.55558 3.5,3.5v16.5c0.00006,0.55226 0.44774,0.99994 1,1h10c0.55226,-0.00006 0.99994,-0.44774 1,-1v-17c0,-4.12652 -1.21211,-7.39555 -3.25586,-9.625c-2.04375,-2.22945 -4.89493,-3.375 -7.95703,-3.375c-3.90424,0 -6.26548,1.42608 -7.78711,2.60156v-1.60156c-0.00006,-0.55226 -0.44774,-0.99994 -1,-1zM4,17h8v18.66406v8.33594h-8zM19,17h8v2.63867c0.00013,0.41422 0.2556,0.78549 0.64242,0.93364c0.38682,0.14814 0.82494,0.0425 1.10172,-0.26567c0,0 2.9657,-3.30664 8.04297,-3.30664c2.5729,0 4.82842,0.92227 6.48242,2.72656c1.654,1.8043 2.73047,4.53496 2.73047,8.27344v16h-8v-15.5c0.00126,-0.14111 -0.02737,-0.28089 -0.08398,-0.41016c-0.22196,-2.82573 -2.53569,-5.08984 -5.41602,-5.08984c-3.02558,0 -5.5,2.47442 -5.5,5.5v0.25v0.25v15h-8z"></path>
                </g>
              </g>
            </svg>
          </Link>
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.mirrorfolio.com/"
            className="font-syne"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="25"
              height="25"
              viewBox="0,0,256,256"
              className="hover:scale-105 hover:backdrop-blur-sm hover:bg-current/30 rounded-sm"
            >
              <g
                fill="#f8f9ff"
                fillRule="nonzero"
                stroke="none"
                strokeWidth="1"
                strokeLinecap="butt"
                strokeLinejoin="miter"
                strokeMiterlimit="10"
                strokeDasharray=""
                strokeDashoffset="0"
                fontFamily="none"
                fontWeight="none"
                fontSize="none"
                textAnchor="none"
                style={{ mixBlendMode: "normal" }}
              >
                <g transform="scale(5.12,5.12)">
                  <path d="M24.40234,9c-6.60156,0 -12.80078,0.5 -16.10156,1.19922c-2.19922,0.5 -4.10156,2 -4.5,4.30078c-0.39844,2.39844 -0.80078,6 -0.80078,10.5c0,4.5 0.39844,8 0.89844,10.5c0.40234,2.19922 2.30078,3.80078 4.5,4.30078c3.50391,0.69922 9.5,1.19922 16.10156,1.19922c6.60156,0 12.59766,-0.5 16.09766,-1.19922c2.20313,-0.5 4.10156,-2 4.5,-4.30078c0.40234,-2.5 0.90234,-6.09766 1,-10.59766c0,-4.5 -0.5,-8.10156 -1,-10.60156c-0.39844,-2.19922 -2.29687,-3.80078 -4.5,-4.30078c-3.5,-0.5 -9.59766,-1 -16.19531,-1zM24.40234,11c7.19922,0 12.99609,0.59766 15.79688,1.09766c1.5,0.40234 2.69922,1.40234 2.89844,2.70313c0.60156,3.19922 1,6.60156 1,10.10156c-0.09766,4.29688 -0.59766,7.79688 -1,10.29688c-0.29687,1.89844 -2.29687,2.5 -2.89844,2.70313c-3.60156,0.69922 -9.60156,1.19531 -15.60156,1.19531c-6,0 -12.09766,-0.39844 -15.59766,-1.19531c-1.5,-0.40234 -2.69922,-1.40234 -2.89844,-2.70312c-0.80078,-2.80078 -1.10156,-6.5 -1.10156,-10.19922c0,-4.60156 0.40234,-8 0.80078,-10.09766c0.30078,-1.90234 2.39844,-2.50391 2.89844,-2.70312c3.30078,-0.69922 9.40234,-1.19922 15.70313,-1.19922zM19,17v16l14,-8zM21,20.40234l8,4.59766l-8,4.59766z"></path>
                </g>
              </g>
            </svg>
          </Link>
        </div>
      </div>
    </footer>
  );
}
