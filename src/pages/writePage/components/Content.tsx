import styled from '@emotion/styled';
import {
  Wrapper,
  Header,
  ImgBox,
  FunctionalBox,
  TextBox,
  IconBox,
  VoteText,
} from '../style/content';

import Album from '../style/album.png';
import { useEffect, useState } from 'react';

interface ContentType {
  title: string;
  setTitle: React.Dispatch<React.SetStateAction<string>>;
  contents: string;
  setContents: React.Dispatch<React.SetStateAction<string>>;
  files: any;
  setFiles: React.Dispatch<React.SetStateAction<any>>;
}

function Content({
  title,
  setTitle,
  contents,
  setContents,
  files,
  setFiles,
}: ContentType) {
  const [imageInsert, setImageInsert] = useState(false);

  const [isInsertImage, setIsInsertImage] = useState(false);

  const onLoadFile = (e: any) => {
    const regexp =
      /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/;
    if (files !== '') {
      if (!regexp.test(files)) {
        console.log('Please enter valid url.');

        alert('Please enter valid url.');
      } else {
        // window.location.assign(files);
        setImageInsert(false);
        setIsInsertImage(true);
      }
    } else {
      console.log('Please upload an image.');
      alert('Please upload an image.');
    }
    // 이미지 링크 작성하는 형식으로 변경
    //
    // const fileArr = e.target.files;
    // // console.log(file);
    // // setFiles(file);
    // let fileURLs: any[] = [];
    // let file;
    // let filesLength = fileArr.length > 10 ? 10 : fileArr.length;
    // for (let i = 0; i < filesLength; i++) {
    //   file = fileArr[i];
    //   let reader = new FileReader();
    //   reader.onload = () => {
    //     // console.log(reader.result);
    //     fileURLs[i] = reader.result;
    //     setFiles(() => [...fileURLs]);
    //   };
    //   reader.readAsDataURL(file);
    // }
  };

  useEffect(() => {
    // recoil에 이미지 업로드
    // 이미지를 화면에 캐러셀 형식으로 나열
  }, [files]);

  return (
    <WritePageWrapper>
      <Header>
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
        >
          <rect width="32" height="32" fill="url(#pattern0)" />
          <defs>
            <pattern
              id="pattern0"
              patternContentUnits="objectBoundingBox"
              width="1"
              height="1"
            >
              <use xlinkHref="#image0_2_83" transform="scale(0.03125)" />
            </pattern>
            <image
              id="image0_2_83"
              width="32"
              height="32"
              xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAIKADAAQAAAABAAAAIAAAAACshmLzAAAD0klEQVRYCbVWO28TQRCePfvOPieWIZAHeQCRiBCRIBIPAR2kpCElEhUNPaJFFIiOgp9ARQ8UlIEOEBApUCAEwklkxSGJ83JydnyPZb/Da12S2/UBYSR7zzvffN94b3d2GCU0/u1bZvVQ5zhxdp0RO0WcHxGh+MDKxFiZE/9CjD8/WNmcZCMj279d+m+mdxMtLS0dMZl3nxO7KbD5dvimv8qIP3V5+kF3d3dZF6NMoFgsZg/m7Xuc6I4gyOlIND5HCDxerdYeDg8P1+NwsQksLi72pY3gmXBejAv60znxJ955gTHR09OzsDt2TwIrKwunWcBeEvHB3eB/+81K3ODXurr6Pkd5diSAf24a/L1OnHNOKysV2traonq9FnJlszZ1dHRQV9chsRd3UEa1xDMruQG7EF2JFhrvvJC3X4sJ5bLXag7Nz89ToxG/wS0rQ/39/WTb6i2D17FerV2Re8KQKWLD6cRdt0Fzc7NKcfAgMWCAVRk0oCX94QrgqKWZ/11MKlOfnZ0hx9mScdoxl+ugY8eO6zCOx1MncETDFcA5F2ileL1eTywOVSSKGI3lmppkoMI1i4wSLzebEhDjaBcDTWgbYXltU+G2t+M3XYxuaypBTB7aBmp7K0rxkMlkFB71dKIYoW2EF4uaJ/TgjP+pJYmBtliB8FbT8pumRZZlaTFRJ7CIaWtCG6dAXqla/MDAEBlGSouBExhgE1qYQCJsNpuloaGjotS2ateeOPiAATapgU17X0siz/Noc7MqEpAze0f4gAE2oZXT6GTEPhhRBQRBQD9/LtD6+pqAiUquMWArleXwsioUDlBvb594JeoVg7YRtlEKUtT0mZkftLa22lY8SoFEEYNY3b0AbQM9XDRYPqOSFYs/KEFBkSF7RsSCQ1kVhbaBBlJEVqPRQeBTqVQi3/ej03/1DA5wgXOXVaFtoHtFAxl1lstl7dJFsUme8RrAGTVoQjvcIehehdMBAJ3OxsZ6FLsvz+AEd9OcpiaFCeBeFifoMZzYPP/LJDe0ZLveOiNonT3f+1itbvwvfQI3NKAlRVoJoEdbqlRui3MbSOd+j+CGhuwHwd9KAD9GR8emCoXCjVQqte9JgBPc0ICWtNjCOj398VKj5kyK3WtL4L+M4masWXZufGzs3NvdPDtWQDoBzORooLOz852+z5cR8SNiwQGuOHFExa5AlO7Tp6nL3G08cWrOyXZ3gYyDcM7OfWWmdevMmbNv5Hzc2DYBGfT1w6vDrpW/63vehOe6g67v24EfhA0CNpeZTjlp0yyl0qkXZmPz0cnzV5dlrG78Bchsrvh6RYQXAAAAAElFTkSuQmCC"
            />
          </defs>
        </svg>

        {/* <label htmlFor="input-file">
          <img src={Album} alt="album" />
        </label>
        <input
          style={{ display: 'none' }}
          type="file"
          id="input-file"
          onChange={onLoadFile}
          multiple
        /> */}
        <InsertBox>
          <img
            src={Album}
            alt="album"
            onClick={() => {
              setImageInsert(!imageInsert);
              setIsInsertImage(false);
            }}
          />
          {imageInsert && (
            <>
              <InsertUrlInput
                value={files}
                onChange={e => setFiles(e.target.value)}
              />
              <div style={{ cursor: 'pointer' }} onClick={onLoadFile}>
                ✔️
              </div>
            </>
          )}
        </InsertBox>
      </Header>

      {isInsertImage && (
        <FunctionalBox style={{ height: '300px' }}>
          <SlideBox>{files && <SildeImg src={files} alt="" />}</SlideBox>
        </FunctionalBox>
      )}
      <FunctionalBox>
        <WritePageInputBox
          value={title}
          onChange={e => setTitle(value => e.target.value)}
          placeholder="제목을 입력해주세요"
        />
      </FunctionalBox>
      <WritePageTextBox>
        <Textarea
          value={contents}
          onChange={e => setContents(value => e.target.value)}
          placeholder="여러분들의 질문거리를 남겨주세요!"
        />
      </WritePageTextBox>
    </WritePageWrapper>
  );
}

export default Content;

const InsertBox = styled.div`
  display: flex;
  justify-content: center;
`;

const InsertUrlInput = styled.input`
  margin-left: 1rem;
  margin-right: 0.4rem;
  border: 1.5px solid #005666;
  border-radius: 15px;
  background-color: rgba(0, 0, 0, 0);
  &:focus {
    outline: none;
  }
  width: 12rem;
`;

const SlideBox = styled.div`
  display: flex;
  overflow-x: scroll;
  overflow-y: hidden;
  height: 300px;
`;

const SildeImg = styled.img`
  height: 300px;
  width: 300px;
`;

const WritePageWrapper = styled(Wrapper)`
  height: 600px;
`;

const WritePageInputBox = styled.input`
  border: 0px solid;
  background-color: rgba(0, 0, 0, 0);
  &:focus {
    outline: none;
  }

  width: 100%;
`;

const WritePageTextBox = styled(TextBox)`
  min-height: 25%;
  /* height: 60%; */
`;

const Textarea = styled.textarea`
  border: 0px solid;
  background-color: rgba(0, 0, 0, 0);
  resize: none;
  &:focus {
    outline: none;
  }

  width: 99%;
  height: 99%;
`;
