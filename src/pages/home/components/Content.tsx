import {
  Wrapper,
  Header,
  ImgBox,
  FunctionalBox,
  TextBox,
  IconBox,
  VoteText,
} from '../style/content';

function Content() {
  return (
    <Wrapper>
      <Header>
        <svg
          width='32'
          height='32'
          viewBox='0 0 32 32'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
          xmlnsXlink='http://www.w3.org/1999/xlink'
        >
          <rect width='32' height='32' fill='url(#pattern0)' />
          <defs>
            <pattern
              id='pattern0'
              patternContentUnits='objectBoundingBox'
              width='1'
              height='1'
            >
              <use xlinkHref='#image0_2_83' transform='scale(0.03125)' />
            </pattern>
            <image
              id='image0_2_83'
              width='32'
              height='32'
              xlinkHref='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAIKADAAQAAAABAAAAIAAAAACshmLzAAAD0klEQVRYCbVWO28TQRCePfvOPieWIZAHeQCRiBCRIBIPAR2kpCElEhUNPaJFFIiOgp9ARQ8UlIEOEBApUCAEwklkxSGJ83JydnyPZb/Da12S2/UBYSR7zzvffN94b3d2GCU0/u1bZvVQ5zhxdp0RO0WcHxGh+MDKxFiZE/9CjD8/WNmcZCMj279d+m+mdxMtLS0dMZl3nxO7KbD5dvimv8qIP3V5+kF3d3dZF6NMoFgsZg/m7Xuc6I4gyOlIND5HCDxerdYeDg8P1+NwsQksLi72pY3gmXBejAv60znxJ955gTHR09OzsDt2TwIrKwunWcBeEvHB3eB/+81K3ODXurr6Pkd5diSAf24a/L1OnHNOKysV2traonq9FnJlszZ1dHRQV9chsRd3UEa1xDMruQG7EF2JFhrvvJC3X4sJ5bLXag7Nz89ToxG/wS0rQ/39/WTb6i2D17FerV2Re8KQKWLD6cRdt0Fzc7NKcfAgMWCAVRk0oCX94QrgqKWZ/11MKlOfnZ0hx9mScdoxl+ugY8eO6zCOx1MncETDFcA5F2ileL1eTywOVSSKGI3lmppkoMI1i4wSLzebEhDjaBcDTWgbYXltU+G2t+M3XYxuaypBTB7aBmp7K0rxkMlkFB71dKIYoW2EF4uaJ/TgjP+pJYmBtliB8FbT8pumRZZlaTFRJ7CIaWtCG6dAXqla/MDAEBlGSouBExhgE1qYQCJsNpuloaGjotS2ateeOPiAATapgU17X0siz/Noc7MqEpAze0f4gAE2oZXT6GTEPhhRBQRBQD9/LtD6+pqAiUquMWArleXwsioUDlBvb594JeoVg7YRtlEKUtT0mZkftLa22lY8SoFEEYNY3b0AbQM9XDRYPqOSFYs/KEFBkSF7RsSCQ1kVhbaBBlJEVqPRQeBTqVQi3/ej03/1DA5wgXOXVaFtoHtFAxl1lstl7dJFsUme8RrAGTVoQjvcIehehdMBAJ3OxsZ6FLsvz+AEd9OcpiaFCeBeFifoMZzYPP/LJDe0ZLveOiNonT3f+1itbvwvfQI3NKAlRVoJoEdbqlRui3MbSOd+j+CGhuwHwd9KAD9GR8emCoXCjVQqte9JgBPc0ICWtNjCOj398VKj5kyK3WtL4L+M4masWXZufGzs3NvdPDtWQDoBzORooLOz852+z5cR8SNiwQGuOHFExa5AlO7Tp6nL3G08cWrOyXZ3gYyDcM7OfWWmdevMmbNv5Hzc2DYBGfT1w6vDrpW/63vehOe6g67v24EfhA0CNpeZTjlp0yyl0qkXZmPz0cnzV5dlrG78Bchsrvh6RYQXAAAAAElFTkSuQmCC'
            />
          </defs>
        </svg>

        <svg
          width='25'
          height='25'
          viewBox='0 0 25 25'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
          xmlnsXlink='http://www.w3.org/1999/xlink'
        >
          <rect width='25' height='25' fill='url(#pattern9)' />
          <defs>
            <pattern
              id='pattern9'
              patternContentUnits='objectBoundingBox'
              width='1'
              height='1'
            >
              <use xlinkHref='#image0_4_2' transform='scale(0.00195312)' />
            </pattern>
            <image
              id='image0_4_2'
              width='512'
              height='512'
              xlinkHref='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAYAAAD0eNT6AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAQnAAAEJwBJs06NAAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAABvTSURBVHic7d17rG53Xefxz++0FBDahovclKD2BgwgkhRKoqHQQggOoDaFQAc0gYzADGMcuQ0QBklxuIQIcQaJgcRprQRIxQHFiVxaIgkFEoRw6w0GAoJFKkJbodKe3/yxVk/P7j6Xffbez/6tvb+vV3JCaM/ez5e9WL/13s+zLq33HgCgln2jBwAAdp4AAICCBAAAFCQAAKAgAQAABQkAAChIAABAQQIAAAoSAABQkAAAgIIEAAAUJAAAoCABAAAFCQAAKEgAAEBBAgAAChIAAFCQAACAggQAABQkAACgIAEAAAUJAAAoSAAAQEECAAAKEgAAUJAAAICCBAAAFCQAAKAgAQAABQkAAChIAABAQQIAAAoSAABQkAAAgIIEAAAUJAAAoCABAAAFCQAAKEgAAEBBAgAAChIAAFCQAACAggQAABQkAACgIAEAAAUJAAAoSAAAQEECAAAKEgAAUJAAAICCBAAAFCQAAKAgAQAABQkAAChIAABAQQIAAAoSAABQkAAAgIIEAAAUJAAAoCABAAAFCQAAKEgAAEBBAgAAChIAAFCQAACAggQAABQkAACgIAEAAAUJAAAoSAAAQEECAAAKEgAAUJAAAICCBAAAFCQAAKAgAQAABQkAAChIAABAQQIAAAoSAABQkAAAgIIEAAAUJAAAoCABAAAFCQAAKEgAAEBBAgAAChIAAFCQAACAggQAABQkAACgIAEAAAUJAAAoSAAAQEECAAAKEgAAUJAAAICCBAAAFCQAAKAgAQAABQkAAChIAABAQQIAAAoSAABQkAAAgIIEAAAUJAAAoCABAAAFCQAAKEgAAEBBAgAAChIAAFCQAACAggQAABQkAACgIAEAAAUJAAAoSAAAQEECAAAKEgAAUJAAAICCBAAAFCQAAKAgAQAABQkAAChIAABAQQIAAAoSAABQkAAAgIIEAAAUJAAAoCABAAAFCQAAKEgAAEBBAgAAChIAAFCQAACAggQAABQkAACgIAEAAAUJAAAoSAAAQEECAAAKEgAAUJAAAICCBAAAFCQAAKAgAQAABQkAAChIAABAQQIAAAoSAABQkAAAgIIEAAAUJAAAoCABAAAFCQAAKEgAAEBBAgAAChIAAFCQAACAggQAABQkAACgIAEAAAUJAAAoSAAAQEECAAAKEgAAUJAAAICCBAAAFCQAAKAgAQAABQkAAChIAABAQQIAAAoSAABQkAAAgIIEAAAUJAAAoCABAAAFCQAAKEgAAEBBAgAAChIAAFCQAACAggQAABQkAACgIAEAAAUJAAAoSAAAQEECAAAKEgAAUJAAAICCBAAAFCQAAKAgAQAABQkAAChIAABAQQIAAAoSAABQkAAAgIIEAAAUdPzoAbaitXZckrsf9Of4JDcluSHJjb33mweOB4vTWrtT1u4zSXLjbX967z8ZNRssUWvtzlm7z9yStfvMrQPH25LWex89wxG11u6R5BeTnJHkwfN/npHk/knuepQvvyXJ95Ncm+SqJFfO//nl3vvVq5oZRmqtPSDJI7J+n7l3khOO8uU3J/lepv3ktj9XJvlC7/3bq5oZRmqtnZ7koVm7z5ya5B45+i/KP0rynazdX65K8vne+/dXNfN2WFwAtNZOSvIrSZ6Q5PGZDv6r+KjiuiSX3fan937NCl4DVq61dt9M+8ptf05b0Utdk7X7zHUreh1YqdbaaVm7z9x3BS+zP8nnM+0vH0vyd733H67gdTZtEQHQWrtbkvOSPCfTxjhuwBhfT3JJkou8O8DSzQf9Z2XaZx41aIzPJrk4ybvFAEs3/5b/3CQXJPm5ASPcmikGLk5yae/9pgEzrDE0AFprT0jyW0l+I8ndhg2y3qeSXJTkkt77D0YPA8mBz+/Py7SIPTHLOYfnliQfzrTPXOo8ApaitXZypgP+c5M8ZvA4B7spyV8k+dPe+8dGDTEkAFprj03ypiS/vOMvfmyuT3Jhkrf33v9t9DDU1FprSc5P8gdJThk8ztF8Nckrk7yvL+HtRUpqrZ2Q5EVJXp3kXoPHOZpPJHlZ7/2TO/3COxoArbUHZ1rEfn3HXnR7fD3JqzK91WlRY8e01s7OFMtnDh7lWH0m06J2+ehBqGOO5WcleX3GvM2/Fe9P8sre+5U79YI7EgCttfsneW2S52XM5/vb5e8zLWofGT0Ie1tr7eFJ3pDkKaNn2aIPJXlF7/0Lowdhb2utnZspln9p9CxbcGuSdyV5be/9O6t+sZUGwHxG/8uS/G6Sn1rZC+28v03y8t7750YPwt7SWntgktdl+sxyr9yoa3+m8wNe03v/5uhh2Ftaa49M8sYkTxo9yzb61yR/mORNq7xyYGUB0Fp7XqbfYO69khcYryf5syQvdqIgWzXf1Or3k/xekrsMHmdVfpzkLUn++26+eQrLMJ/g90dJ/kOSNnicVflepnfQ3rWKb77tAdBaOz7TRnnBtn7j5boyydPcR4DNmm929d4k546eZYd8JMkzln6TFJZrvo7/A5lu2lPBOzL9snnLdn7TbQ2A1tq9krwv07X8lXw/yTN77x8ePQi7S2vtIZkWslNHz7LDrs0Uzl8ZPQi7S2vtiUnek+kufZVcluT83vv12/UNt+0zxtbaQzNdP1/t4J9M/0f8m9ba74wehN2jtfaUJFek3sE/mf43XzH/DGBD5jX2b1Lv4J9Mx9ZPzcfabbEtAdBa+9Ukn8zyr1FepeOSvLW19s75GlQ4rNbaS5J8MMlJo2cZ6KQkH5x/FnBYrbUTWmvvTPLW7O4rybbqlCSfnI+5W7bljwBaay/NdLLfXjljeTt8Isl5vffvjh6EZZmfLPYnmc7y53YXJfmPnuDJHbXW7pPk0iz/xnE7aX+mkwPfvJVvsukAmG9L+s5YyA7nG0me6vpnbjMvZP8nyVmjZ1moK5I8XThzm/l+GB9M8qDRsyzURUmev9nbb28lAP44dc7036xvJznTY1SZf/O/PA7+R3NFkrO9E8D8WOvPJHnA6FkW7h299xdu5gs39bZ9a+1FcfDfiAckeX9rba9e183G/Ukc/DfirEw/Kwqb18z3x8F/I14wH5OP2TEHQGvt8UnetpkXK+rRmT4qoaj5JDcflW3cc50YWN47M62dbMzb5mPzMTmmjwBaa7+Q5NNZ/tOVlugVvfc3jh6CnTVf5vbBOEn2WO3PdA7Nh0YPws5qrb0804nlHJvrkzy69/61jX7BhgOgtXZipkv9/t3mZitvf6YTnP5q9CDsjPkmP1ek9qV+W/HDJGe5WVAdrbV/n+lEWcG8OV9K8tje+w0b+csbCoDW2r4kf5nkqVubrbwbMi1oXx49CKs1397306l5k5/tdG2m32rcNniPm29wc0WSE0fPsst9MMmv9d73H+0vbrSyXh8H/+1wYpIPtNbuOXoQVmd+sM974+C/HU5N8t75Z8oeNa+JH4iD/3Z4aqZj9lEdNQDmt2ResdWJOOCUTNdusnf9fuo82GcnnJvpZ8redVFq30l2u71iPnYf0RE/Apif7PfFJGds42BMnth7/8joIdherbUHJrk6e/eRvqP8OMnpvfdvjh6E7dVaOzeJB6ltv6uSPOxITxA82jsAz4uD/6q8sbW2V59hXdnr4uC/CnfJ9LNlD5nXQFdHrcYZmY7hh3XYdwBaa3fLdALO/bZ/LmYX9N7/fPQQbI/5tqWfizOYV2V/kke6vfbe0Vp7dpJLRs+xh/1jklN77zcd6l8eaaH6r3HwX7ULPTlwT/FQrNXaF9eH7xnz2nfh6Dn2uPtlOpYf0iEXq9baTyd56aom4oCfT7KpWziyLK21s5N4tv3qPWX+WbP7vSjTGshqvXQ+pq9zuN9WXhOXY+yUV7fWTh49BJs3f475ptFzFPIm58/sbvOa9+rRcxRxYqZj+jrrAqC1dmqS3171RBxwryQvHz0EW3J+kjNHD1HImZl+5uxeL49byu+k356P7WusOwmwtfaeJM/YqalIkvwoyWm9938YPQjHprV2pyRfiWuYd9pXkzxks89BZ5zW2s8kuSbJXUfPUsx7e+/PPPgfrHkHoLX281HWI9w1yYtHD8GmnBcH/xFOyfSzZ/d5cRz8Rzh/PsYfcMePAJ6TxGdrY1wwP3OB3cVjfsfxs99l5jXugtFzFNUyHeNv/wcHfwTQWrs6yWk7PBS3O7f3/tHRQ7AxrbX7JvlWkuNHz1LULUl+tvd+3ehB2JjW2jlJ3AF1nGt676ff9l8O/MbZWjsrDv6jPefof4UFeVYc/Ec6PtM2YPewxo112nysT7L2IwAbZrzzWms+G9s97DPj2Qa7xLy2OW9jvAP7zMEB8KsDBmGtuyd53OghOLr57f9HjZ6DPGreFizf4zKtcYx14Fi/L0laa7+Q5EHDxuFgTxg9ABvy+NEDcIBtsTtY25bhQfMx/8A7AOcMHIa1bIvdwUFnOWyL3cHathznJAJgiR7ZWrvn6CE4Kged5bAtFm5e0x45eg4OWBMAdqDl2Jfk7NFDcHittQfEFTNLctq8TVius+NJmUvy+CTZ11q7X5L7DB6GtR42egCO6BGjB2Ad22TZrGnLcp/W2v32JTlj9CSsc/rR/woD2WeWxzZZNmva8pyxL8mDR0/BOnaWZbPPLI9tsmzWtOV5sHcAlsnOsmz2meWxTZbNmrY8ZwiAZTq5tfbTo4fgsOwzy2ObLNS8lp08eg7WOWNfknuPnoJDEgDLZZ9ZHttkuaxly3TvfXFrxqU6cfQArNdau1OSE0bPwTonzNuG5Tlp9AAc0t0FwHLZaZbJ/rJcts0y+WVmmQTAggmAZbK/LJdts0zWsmUSAAtmp1km+8ty2TbLZC1bpru7NSMAFLQvyY2jh+CQfjh6AA7J/rJcts0yWcuW6UYBsFx2mmWyvyyXbbNM1rJlEgALZqdZJvvLctk2y2QtW6Yb9yW5YfQUHJKdZoF67z9JcvPoOVjn5nnbsDzWsmW6YV+S742egkP6p9EDcFj2meWxTZbLWrZM39uX5KrRU7DOv/TeLWjLZZ9ZHttkoea17F9Gz8E6VwmAZbpm9AAckX1meWyTZbOmLY8AWKirRw/AEdlnlsc2WTZr2vJctS/JlaOnYB07y7LZZ5bHNlk2a9ryXLmv935dku+OnoQ1vjh6AI7oC6MHYB3bZNmsacvy3d77dbfdCviyoaNwsP1JLh89BIfXe/92fKa5JNfM24TlujzT2sYyXJZMtwJOko8OHIS1Ptd7/+fRQ3BUonk5bIuFm9e0z42egwM+mgiAJbItdgcHneWwLXYHa9ty3B4AvfevJfnG0HG4zcdGD8CGOOgsh22xO1jbluEb8zE/Bz8O+K8HDcPtbkzy8dFDcHTzybOfHT0H+ey8LVi+j8fzGpbgwLH+4AC4eMAgrHVp7/1Ho4dgw+wz49kGu8S8tl06eg5u32da7/3AP22tXZ3ktBETkSQ5t/fuc7JdorV23yTfSnL86FmKuiXJz3oHYPdorZ2T5COj5yjsmt776bf9l313+Jd/tsPDcLtvxWeZu8p84Pnw6DkK+7CD/65zWaa1jjHWHOPvGAAXJ+lhhEt6766T3X0uGj1AYX72u8y8xl0yeo6ieu7wkdmajwCSpLX2niTP2MGhSH6U5LTe+z+MHoRj01q7U5KvJDll9CzFfDXJQ3rvPxk9CMemtfYzmW6kddfRsxTz3t77Mw/+B3d8ByBJXpXETrWz3urgvzvNB6BXjp6joFc6+O9O81r31tFzFPOTTMf2Nda9A5AkrbU/SvKfd2AokuuTnNJ7/8HoQdic1lpL8qkkZ46epYjPJHlMP9Tixa7QWjs507s49xo9SxH/s/f+4jv+w0O9A5Akr0tyw2rnYXahg//uNh+IXjZ6jkJe5uC/u81r3oWj5yjihkzH9HUOGQC9939K8uZVTkSS5P8lefvoIdi63vvlST40eo4CPjT/rNn93p5pDWS13jwf09c55EcASdJau1uSa5Pcb4WDVXdB7/3PRw/B9mitPTzTA08O984aW7M/ySN77x79u0e01p4dVwWs0j8mObX3ftOh/uVhF6r5C167oqGYbiP77tFDsH3mA5NL01bnIgf/PefdcUvtVXrt4Q7+yRHeAUiS1trxSb6Y5IwVDFbdE3vv7oi1x7TWHpjk6iR3GT3LHvPjJKf33r85ehC2V2vt3Lih1ipcleRhvfdbDvcXjvhW5fyFL9nuqchfO/jvTfMB6i2j59iD3uLgvzfNa6GH0W2/lxzp4J8c5R2AA3+ptf+R5BXbNVVxX03y6N77P48ehNVorR2X5P8mOXf0LHvER5I8ufd+6+hBWI3W2j2TfDpuqLVd3tB7/29H+0sbDYB9Sf4yyVO3YbDKbkhyVu/9y6MHYbVaa/fItKCdOnqWXe7aTMH8/dGDsFqttYcmuSLJiaNn2eU+mOTXNnJr+Q2drTx/owuSfGmLg1W2P8mzHfxrmA9YT0vyw9Gz7GI/TPI0B/8a5rXx2ZnWSjbnS5muLtvQz3DDlyv13m/ItKBdv8nBqntl7/2vRg/Bzum9fyXJs2JB24z9SZ41/wwpYl4j3Vp7c67PFMwbvonfMV2v3Hv/WpLzMz2Hm427pPf+xtFDsPN67x9K8vLRc+xCL59/dhQzr5XuDXBsbkly/nyM3rANnQOw7otae1GS/3XMX1jTp5M8rvf+49GDME5r7X8nee7oOXaJi3rvvzl6CMZprd0lyceTPHr0LLvEf+q9H/NdZTcVAEnSWvvjJC/Y1BfX8e0kZ/bevz16EMZqrd05yeVJzho8ytJdkeTs3vvNowdhrNbaAzI9+OkBo2dZuHf03l+4mS/cyi1L/0vc9exIvpHp0iUHfzIf0J6e6QDHoV2R5OkO/iTJvHY+OdNayqFdlOlYvCmbDoDe+0/mt+leFic53dEnMl265LalHNB7/26SsyOcD+WiTL/5f3f0ICzHvIY+OtOayu32Z3oq5m/23n+y2W+y5YeW9N7fHJc7HexdSc6xkHEovfeb53B+aYRzMv0MXjovZH7zZ515LT0n09rK7ZfHbvmJvZs+B2DdN5pu4vCB1L2T061Jfq/3/rbRg7A7tNaekulhKCeNnmWQH2a61M/Z/mxIa+13Mt1q+7jRswzy1UwH/225n8y2BUCStNbuleR9SR6/bd90d/h+kmf23j3QgmPSWntIpnCudsfAazMtZK7z55i01p6Y5D1J7jF6lh12WaZL/bbtXjzb+tzyebAnJXnHdn7fhbsyyWMc/NmM+QD46Ez3u6/iI5nOkXHw55jNa+1jMq29VbwjyZO28+CfbHMAJNMTBOdLEp6f5Hvb/f0XpCe5ONO9/a8ZPQy713yr2ycneX2mx97uVT/O9L/xyW7vy1bMa+5Zmdbg7Xsbe3m+l+T5vfcXHu3JfpuxrR8BrPvmrZ2U6SqB303yUyt7oZ33t5nuVPa50YOwt7TWHpjkdZluGrTtgT7I/kxn+b/GI33Zbq21RyZ5Y6Z3n/eKf03yh0ne1Htf2Qn2Kw2AAy/S2v2TvDbJ87K7T974+0yXXlR6u5YBWmsPT/KGJE8ZPcsWfSjJK1wSy6q11s5N8qYkvzR6li24NdPVDq/tvX9n1S+2IwFw4MVae3CSP0jy6zv2otvj60leleTdfSd/YJTXWjs706J25uBRjtVnMsXy5aMHoY7WWsv0AK7XJ/m5sdMcs/dnemjcjp3bsKMBcOBFW3tspkXtl3f8xY/N9UkuTPL23vu/jR6GmuZF7fxM8bz0y2y/mulpbu8Ty4zSWjshyYuSvDrJvQaPczSfyBTLn9zpFx4SAAdevLUnJPmtJL+R5G7DBlnvU5k+s7yk9/6D0cNAkrTW7pTkvEznBzwxyfFjJzrgliQfzrTPXLqVO5PBdmqtnZzkgkz7zGMGj3Owm5L8RZI/7b1/bNQQQwPgwBCt3S3TwvacTPcQGHGewNczPYLyot771QNeHzastXbfTG91PifJowaN8dlMZ2G/u/d+3aAZYENaa6dnCoELMubjgVszXct/caZQvmnADGssIgAONl858CtJnpApBn4xqzkb+rpMG+OyJJe5lI/dao6Bxx/057QVvdQ1WbvPOOizK7XWTsvafea+K3iZ/Uk+n2l/+ViSv1vlGf2bsbgAuKPW2j0yRcAZSR48/+cZSe6f5K5H+fJbMt2l79okV2W6ccRVSb7st3z2qvkxqo/I+n3m3klOOMqX35zp2uOrDvpzZZIveLIle9X87sBDs3afOTXT3QaP9lHbj5J8J2v3l6uSfH7p97tYfAAcSWvtuCR3P+jP8Zk+W7khyY0eLgJrzecRHLzPJMmNt/3x+T2s1Vq7c9buM7dk7T5z68DxtmRXBwAAsDl75U5jAMAxEAAAUJAAAICCBAAAFCQAAKAgAQAABQkAAChIAABAQQIAAAoSAABQkAAAgIIEAAAUJAAAoCABAAAFCQAAKEgAAEBBAgAAChIAAFCQAACAggQAABQkAACgIAEAAAUJAAAoSAAAQEECAAAKEgAAUJAAAICCBAAAFCQAAKAgAQAABQkAAChIAABAQQIAAAoSAABQkAAAgIIEAAAUJAAAoCABAAAFCQAAKEgAAEBBAgAAChIAAFCQAACAggQAABQkAACgIAEAAAUJAAAoSAAAQEECAAAKEgAAUJAAAICCBAAAFCQAAKAgAQAABQkAAChIAABAQQIAAAoSAABQkAAAgIIEAAAUJAAAoCABAAAFCQAAKEgAAEBBAgAAChIAAFCQAACAggQAABQkAACgIAEAAAUJAAAoSAAAQEECAAAKEgAAUJAAAICCBAAAFCQAAKAgAQAABQkAAChIAABAQQIAAAoSAABQkAAAgIIEAAAUJAAAoCABAAAFCQAAKEgAAEBBAgAAChIAAFCQAACAggQAABQkAACgIAEAAAUJAAAoSAAAQEECAAAKEgAAUJAAAICCBAAAFCQAAKAgAQAABQkAAChIAABAQQIAAAoSAABQkAAAgIIEAAAUJAAAoCABAAAFCQAAKEgAAEBBAgAAChIAAFCQAACAggQAABQkAACgIAEAAAUJAAAoSAAAQEECAAAKEgAAUJAAAICCBAAAFCQAAKAgAQAABQkAAChIAABAQQIAAAoSAABQkAAAgIIEAAAUJAAAoCABAAAFCQAAKEgAAEBBAgAAChIAAFCQAACAggQAABQkAACgIAEAAAUJAAAoSAAAQEECAAAKEgAAUJAAAICCBAAAFCQAAKAgAQAABQkAAChIAABAQQIAAAoSAABQkAAAgIIEAAAUJAAAoCABAAAFCQAAKEgAAEBBAgAAChIAAFCQAACAggQAABQkAACgIAEAAAUJAAAoSAAAQEECAAAKEgAAUJAAAICCBAAAFCQAAKAgAQAABQkAAChIAABAQQIAAAoSAABQkAAAgIIEAAAUJAAAoCABAAAFCQAAKEgAAEBBAgAAChIAAFCQAACAggQAABQkAACgIAEAAAUJAAAoSAAAQEECAAAKEgAAUJAAAICCBAAAFCQAAKAgAQAABQkAAChIAABAQQIAAAoSAABQkAAAgIL+PxXIG/F6ZuW/AAAAAElFTkSuQmCC'
            />
          </defs>
        </svg>
      </Header>
      <ImgBox
        bgphoto={
          'https://user-images.githubusercontent.com/76567238/221348823-206633b2-52dd-40a0-b808-c42b2f85c4ad.png'
        }
      ></ImgBox>
      <FunctionalBox>
        <IconBox>
          <svg
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
            xmlnsXlink='http://www.w3.org/1999/xlink'
          >
            <rect width='23.4' height='24' fill='url(#pattern0)' />
            <defs>
              <pattern
                id='pattern0'
                patternContentUnits='objectBoundingBox'
                width='1'
                height='1'
              >
                <use
                  xlinkHref='#image0_2_51'
                  transform='matrix(0.0160256 0 0 0.015625 -0.0128205 0)'
                />
              </pattern>
              <image
                id='image0_2_51'
                width='64'
                height='64'
                xlinkHref='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAQKADAAQAAAABAAAAQAAAAABGUUKwAAAFJklEQVR4AeWaS4gUVxSGnWgiBgmT+EJxpCUxj5W7gILKLJyNuNGFMeDS4CYLQUIEE3ARkAHRhYtAQlxocOFGA0mILgYfKIiBLIxJDGg7PohCQPFB4mOS/xu7hjOnb81UV1VPV1Uf+LvuPffWOec/devWrdvVM6398rZc9At9wgJhvjlSRu42cMccb6g8JFwRSiVzFe0m4WvhuvBfRmADW9jEdiGlR1FtEM4JI0JW0nHnYxsf+MJnx2WGItgiXBbigm6XHp/4JobUkjaLON0qfCLUhInksRrPCOeF2wL3O/d6dL+rODYvRHPEIulWCKuEV4WJpK7GQeEr4ZnQdqnJA8Mw7soyTM8Ku4XVwitCWuFcbGALm9iO80tMNaGt8oGs3xNCQTyR/hvhXaFdgm184CsUA7ERY+4yWxYPCiGnD6TfKywWpkrwhU98h2IiVmLORXj0XBJCjo5JPy8XL+mM4JsYQrERc+bH5msy8nPAwUPpmASLIsRCTD4RxA6HVDJLZ50WvNEL0i1LZbG9JxETsfl44QCXluRl9f5R8MZ+kC7LrN5SECk6Exsx+rjhAqfEwtLTGxmSruVMJvaYX0diJFYfP5wSSb96+ZNZxOQ2qyaKIlsnYiVmzwNuE8pMtf4h2BN/Vb13wrOK2UjMxG65wA2OscKKy57wXPX3Y3sXv4HY4WA5wTEo70j7r2A77w/2LJcSDpYTHOHaJIelsR3rqpfpvm8i1FDAoS5YbnAdJ7xx+WXl+nE9yl2Bi00AXOE8JrxA2A511XvGWstfgEtdsBxHX5peanD7sHGMDt82Okf1sh8hDicrY5zfkNa/Xr5ne1akDCc7AuAM92mbXcNFlBUVuNkkbOYWWOrInnD1KlU9t6UkYIljOOzqVap6bktIQJ9j6Du55lJXPbc+EtDVI4DLeV+wE0PqHRSMFVzgZrneZwSMuKBnuHqlqyTgqmO4zNWrVG263UMJeKtKjB2XRAnophFwgxFwzWWpmxIwHLoFqpyAAXexRy/+IintthHlN13HKlRjX4Yg971gn48HqsDYcfjCcfzOtvsdk0dqnGM7lLwcuyES8ZquwrBgR8GuqLECR3+Bm7bE4PiZYBPwl+ozaSi5JNoUheNC4algk/A5DSWXxNvi8PxSsAngibCOhpJKS3+MwJGt4t8Em4R7qgf/SJC+yNKr4Fr+awxCy4V/BJsEklKm12Tu+/OOA3z6hUTysXrZBFDmucnKseiS+e/xiOBxFXwSfpIu83c3kYM2HHP7QILYWAj5+YCE8BHzSqFowjtMbp/IROReV+GU4EfCE+m2R50KcNyqGHL/SCrixWLoiOCTQB19J2WenB8TQrFdkj6325W19J6Ao7+l64RM6YeSluA2VWy279jGKSh37FNZy80m4LZtaEOZWX21sFs4K4wI1r8tn1NbTWhJsm6BP0vgba36fCTcFW4Z3GyUITVfWNAAZTZpVgirhHEfMqjupS7FoDBln8vbrF/z0Zh6n8pHBds/z/Jl2d4iZL2IMtGaWBJ/Bk5l2H4qhB5L9tw0ZUYLQ32DwMTcEbGB/+4iYLijs32ylq/LHl95bhJye6zJ1qhkHT7RHMBw3ydsfGG26fcXaU4KPLcB93l0JEHMD4CnSnRkxTkkXBEKJfaKslTeKTwSrD4q8yrNixVbbpWRiNxkx0NizMxeOZmMOEvQNZVjbQjFJYCd1h1C1nnFuCpmMZQAnvesz7tCbAKYoQe6grUhSQIeC7sEXpW7TtgbrFWF9f8EQYupODhwTQAAAABJRU5ErkJggg=='
              />
            </defs>
          </svg>
          <svg
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
            xmlnsXlink='http://www.w3.org/1999/xlink'
          >
            <rect width='24' height='24' fill='url(#pattern2)' />
            <defs>
              <pattern
                id='pattern2'
                patternContentUnits='objectBoundingBox'
                width='1'
                height='1'
              >
                <use xlinkHref='#image0_2_55' transform='scale(0.03125)' />
              </pattern>
              <image
                id='image0_2_55'
                width='32'
                height='32'
                xlinkHref='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAIKADAAQAAAABAAAAIAAAAACshmLzAAABp0lEQVRYCe2UvS4FQRiGT+jQCK5CFBpRSJy4BhoSDWoVF+AWTkJcAY5CofBzNRIRNEIn0XheOd/JxM7Mzs6e3ep8yZOZ/ebn/fbd2el0xtGOA/PIHMAjfMAJNB4S3YcH+IQr6ME3qIhGYpZdd+EWvgatnmdgDd7gDFTUyCImaiImvkGiD3KmVqSImoArPkVSn2PBBqu0VURtX1dcuS2oZH+OaEhc+ST764jGxEvtX2W1+8ts8qxFVWOdBe/Q/bdQ+0Xtf2bCDuSImlZIXOO6B6Kn/54J17AIORETN/t1OQVDk47gFS6hSiFd5vtsJ/0XpfbbRLXTcAgvoBttGWKhX03iumRC0WdgLzQYyqcUkiJu9mddPiouVEiKuNbr8tH5qh0qxM7IDf3YN3fFSk+/Ozmlr0JOQUWUhdkfPf1lm/jGVYT+liXfoJMbmf3OnsPuMb2L4ZO/k3X6/VsVs2UumP3Zp78oWczEXGjUfisl5kKj9lsBan0utGK/FeFzoRX7rQCfC63Zb0W4LlSyf9J2qNn+sH4CtgftHO05tBp68zt4ghUYR5IDvzxnZ8iK4MfOAAAAAElFTkSuQmCC'
              />
            </defs>
          </svg>
          <svg
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
            xmlnsXlink='http://www.w3.org/1999/xlink'
          >
            <rect width='24' height='24' fill='url(#pattern4)' />
            <defs>
              <pattern
                id='pattern4'
                patternContentUnits='objectBoundingBox'
                width='1'
                height='1'
              >
                <use xlinkHref='#image0_2_72' transform='scale(0.03125)' />
              </pattern>
              <image
                id='image0_2_72'
                width='32'
                height='32'
                xlinkHref='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAIKADAAQAAAABAAAAIAAAAACshmLzAAACIklEQVRYCcWXPUgcQRiG70QFiUWMRAVTHCFoFFMoohaxMIKQNELaNCdpDWJhaSFYWiQgYhFS2VpoqjQJgsX51wl3FiGHhQgaMASE6EV93mP3bt372R8X54OH25n5ft6d3Z2Zi8fC2yCh3Vb4Pr874VMFj3xFyLWLTdpNwVOFi0gSJgHvoB/mIQdrcC+WpIoEDDmqzVl9mh3fVuPb09vxi+XS4+1a9IhSwCFpz8F+MYtVqlxFKUCP5C88rFKvZCisgFYr03FJxoAdYQWMUucXZAPWK3EPI0BT/BK+l2QL0VEbMKYB/69QBysVYh/Qn6gwdkn/Eeh9CWyNRKzDFSShnGXoVPJq/GF8CZohFocOmIQWcNoFjUU4gA8wDY9gBhagnCnXm3IDVp9m8C1o9dwCPcrYHvyDMxf6pHS3+tUdaa0fgygsSRLlnFUyXXzUhcu0zNqFR1xjUTRTJEn5+Qo+4/gjioquHFnabX4EuOIia+a3bpMCuriVtCkB+qSfmBTQSXEtARlTM6Dplxl7BMYFPOfuT4XJR5DWMzAhQDvwMzAmQMW1nWvnNDIDhRfQr4B2OUZoE+T6D4W/cl674W+c8+t2BCJ6yaF6G3YurUbb0Ac5u9P61Vi9da0zwzLoHCj1TpOfl73A4TWMg05Cw5CfAQUn4D08BqdJ0Co8hU+gs95dTaerKfhmJ/KjXr46ig2AjlzOT1fT6ZVDPifwE3bh1gzeAMHaaJS1tffZAAAAAElFTkSuQmCC'
              />
            </defs>
          </svg>
        </IconBox>

        <VoteText>투표 참여 : 454</VoteText>
      </FunctionalBox>
      <TextBox>
        저 이 신발 3000만원 인데 사도 될까요? <br />
        연봉10억이에요
      </TextBox>
    </Wrapper>
  );
}

export default Content;
