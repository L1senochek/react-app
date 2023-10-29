import { Component } from 'react';
import './icon-loupe.scss';

class IconLoupe extends Component {
  render = (): JSX.Element => {
    return (
      <svg
        version="1.0"
        xmlns="http://www.w3.org/2000/svg"
        width="1.5vw"
        height="1.49vw"
        viewBox="0 0 1280.000000 1270.000000"
        preserveAspectRatio="xMidYMid meet"
        className="icon-loupe"
      >
        <g
          transform="translate(0.000000,1270.000000) scale(0.100000,-0.100000)"
          fill="#15ff005e"
          stroke="none"
          className="loupe"
        >
          <path
            className="loupe_path"
            d="M4895 12689 c-1613 -102 -3112 -968 -4012 -2319 -694 -1043 -991
-2273 -847 -3520 185 -1607 1121 -3058 2509 -3887 677 -405 1361 -632 2180
-723 156 -18 716 -24 895 -11 870 67 1729 349 2424 798 l69 45 1516 -1515
c834 -833 1532 -1523 1551 -1534 52 -27 193 -25 285 6 100 33 247 111 336 178
123 93 205 171 493 469 286 294 357 383 431 540 74 155 94 317 51 404 -10 19
-696 714 -1544 1562 -1479 1480 -1526 1529 -1513 1550 262 420 497 991 620
1508 151 636 181 1333 85 1995 -180 1243 -840 2421 -1814 3237 -1041 872
-2355 1303 -3715 1217z m590 -1739 c1099 -82 2065 -645 2673 -1560 310 -466
492 -968 564 -1560 17 -140 17 -602 -1 -745 -72 -597 -264 -1119 -588 -1595
-427 -626 -1048 -1102 -1753 -1342 -369 -125 -670 -178 -1070 -185 -271 -5
-440 7 -672 47 -1565 273 -2755 1574 -2889 3158 -15 179 -6 582 16 742 55 398
155 729 330 1085 183 374 396 670 695 964 706 696 1707 1064 2695 991z"
          />
        </g>
      </svg>
    );
  };
}

export default IconLoupe;
