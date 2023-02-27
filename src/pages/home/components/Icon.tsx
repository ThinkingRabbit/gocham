import styled from '@emotion/styled';

const IconBox = styled.div`
  display: flex;
  gap: 10px;
`;

const chatIcon = styled.div`
  &:hover::before {
    transform: translate(200px);
  }
`;

function Icon() {
  return (
    <IconBox>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <rect width="23.4" height="24" fill="url(#pattern0)" />
        <defs>
          <pattern
            id="pattern0"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use
              xlinkHref="#image0_2_51"
              transform="matrix(0.0160256 0 0 0.015625 -0.0128205 0)"
            />
          </pattern>
          <image
            id="image0_2_51"
            width="64"
            height="64"
            xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAQKADAAQAAAABAAAAQAAAAABGUUKwAAAFJklEQVR4AeWaS4gUVxSGnWgiBgmT+EJxpCUxj5W7gILKLJyNuNGFMeDS4CYLQUIEE3ARkAHRhYtAQlxocOFGA0mILgYfKIiBLIxJDGg7PohCQPFB4mOS/xu7hjOnb81UV1VPV1Uf+LvuPffWOec/devWrdvVM6398rZc9At9wgJhvjlSRu42cMccb6g8JFwRSiVzFe0m4WvhuvBfRmADW9jEdiGlR1FtEM4JI0JW0nHnYxsf+MJnx2WGItgiXBbigm6XHp/4JobUkjaLON0qfCLUhInksRrPCOeF2wL3O/d6dL+rODYvRHPEIulWCKuEV4WJpK7GQeEr4ZnQdqnJA8Mw7soyTM8Ku4XVwitCWuFcbGALm9iO80tMNaGt8oGs3xNCQTyR/hvhXaFdgm184CsUA7ERY+4yWxYPCiGnD6TfKywWpkrwhU98h2IiVmLORXj0XBJCjo5JPy8XL+mM4JsYQrERc+bH5msy8nPAwUPpmASLIsRCTD4RxA6HVDJLZ50WvNEL0i1LZbG9JxETsfl44QCXluRl9f5R8MZ+kC7LrN5SECk6Exsx+rjhAqfEwtLTGxmSruVMJvaYX0diJFYfP5wSSb96+ZNZxOQ2qyaKIlsnYiVmzwNuE8pMtf4h2BN/Vb13wrOK2UjMxG65wA2OscKKy57wXPX3Y3sXv4HY4WA5wTEo70j7r2A77w/2LJcSDpYTHOHaJIelsR3rqpfpvm8i1FDAoS5YbnAdJ7xx+WXl+nE9yl2Bi00AXOE8JrxA2A511XvGWstfgEtdsBxHX5peanD7sHGMDt82Okf1sh8hDicrY5zfkNa/Xr5ne1akDCc7AuAM92mbXcNFlBUVuNkkbOYWWOrInnD1KlU9t6UkYIljOOzqVap6bktIQJ9j6Du55lJXPbc+EtDVI4DLeV+wE0PqHRSMFVzgZrneZwSMuKBnuHqlqyTgqmO4zNWrVG263UMJeKtKjB2XRAnophFwgxFwzWWpmxIwHLoFqpyAAXexRy/+IintthHlN13HKlRjX4Yg971gn48HqsDYcfjCcfzOtvsdk0dqnGM7lLwcuyES8ZquwrBgR8GuqLECR3+Bm7bE4PiZYBPwl+ozaSi5JNoUheNC4algk/A5DSWXxNvi8PxSsAngibCOhpJKS3+MwJGt4t8Em4R7qgf/SJC+yNKr4Fr+awxCy4V/BJsEklKm12Tu+/OOA3z6hUTysXrZBFDmucnKseiS+e/xiOBxFXwSfpIu83c3kYM2HHP7QILYWAj5+YCE8BHzSqFowjtMbp/IROReV+GU4EfCE+m2R50KcNyqGHL/SCrixWLoiOCTQB19J2WenB8TQrFdkj6325W19J6Ao7+l64RM6YeSluA2VWy279jGKSh37FNZy80m4LZtaEOZWX21sFs4K4wI1r8tn1NbTWhJsm6BP0vgba36fCTcFW4Z3GyUITVfWNAAZTZpVgirhHEfMqjupS7FoDBln8vbrF/z0Zh6n8pHBds/z/Jl2d4iZL2IMtGaWBJ/Bk5l2H4qhB5L9tw0ZUYLQ32DwMTcEbGB/+4iYLijs32ylq/LHl95bhJye6zJ1qhkHT7RHMBw3ydsfGG26fcXaU4KPLcB93l0JEHMD4CnSnRkxTkkXBEKJfaKslTeKTwSrD4q8yrNixVbbpWRiNxkx0NizMxeOZmMOEvQNZVjbQjFJYCd1h1C1nnFuCpmMZQAnvesz7tCbAKYoQe6grUhSQIeC7sEXpW7TtgbrFWF9f8EQYupODhwTQAAAABJRU5ErkJggg=="
          />
        </defs>
      </svg>

      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <rect width="24" height="24" fill="url(#pattern4)" />
        <defs>
          <pattern
            id="pattern4"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use xlinkHref="#image0_2_72" transform="scale(0.03125)" />
          </pattern>
          <image
            id="image0_2_72"
            width="32"
            height="32"
            xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAIKADAAQAAAABAAAAIAAAAACshmLzAAACIklEQVRYCcWXPUgcQRiG70QFiUWMRAVTHCFoFFMoohaxMIKQNELaNCdpDWJhaSFYWiQgYhFS2VpoqjQJgsX51wl3FiGHhQgaMASE6EV93mP3bt372R8X54OH25n5ft6d3Z2Zi8fC2yCh3Vb4Pr874VMFj3xFyLWLTdpNwVOFi0gSJgHvoB/mIQdrcC+WpIoEDDmqzVl9mh3fVuPb09vxi+XS4+1a9IhSwCFpz8F+MYtVqlxFKUCP5C88rFKvZCisgFYr03FJxoAdYQWMUucXZAPWK3EPI0BT/BK+l2QL0VEbMKYB/69QBysVYh/Qn6gwdkn/Eeh9CWyNRKzDFSShnGXoVPJq/GF8CZohFocOmIQWcNoFjUU4gA8wDY9gBhagnCnXm3IDVp9m8C1o9dwCPcrYHvyDMxf6pHS3+tUdaa0fgygsSRLlnFUyXXzUhcu0zNqFR1xjUTRTJEn5+Qo+4/gjioquHFnabX4EuOIia+a3bpMCuriVtCkB+qSfmBTQSXEtARlTM6Dplxl7BMYFPOfuT4XJR5DWMzAhQDvwMzAmQMW1nWvnNDIDhRfQr4B2OUZoE+T6D4W/cl674W+c8+t2BCJ6yaF6G3YurUbb0Ac5u9P61Vi9da0zwzLoHCj1TpOfl73A4TWMg05Cw5CfAQUn4D08BqdJ0Co8hU+gs95dTaerKfhmJ/KjXr46ig2AjlzOT1fT6ZVDPifwE3bh1gzeAMHaaJS1tffZAAAAAElFTkSuQmCC"
          />
        </defs>
      </svg>
    </IconBox>
  );
}

export default Icon;
