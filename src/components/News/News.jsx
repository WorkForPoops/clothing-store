import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { MDBContainer, MDBRow, MDBCol, MDBView, MDBMask } from 'mdbreact';
import mainPhoto from '../../assets/images/bunker.jpg'
import NewsMain from './NewsMain';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function News(props) {
  const classes = useStyles();
  let arr = props.news.arr

  function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
  }
  
  shuffle(arr)

  return (
    <MDBContainer className='mt-5'>
        <div className={classes.root}>
        <Grid container spacing={3}>
            <Grid item xs={12} sm={8}>
                <MDBRow className="mb-4">
                    <MDBCol md="12">
                        <MDBView zoom >
                            <img
                            className="d-block w-100"
                            src={mainPhoto}
                            style={{borderRadius: 10+'px'}}
                            />
                            <MDBMask style={{borderRadius: 10+'px'}} className="d-flex align-items-end" overlay="black-light">
                                <h3 className="white-text font-weight-bolder p-3">Российские богачи в панике бросились скупать бункеры</h3>
                            </MDBMask>
                        </MDBView>
                    </MDBCol>
                </MDBRow>
                <MDBContainer>
                    <MDBRow className="mb-4">
                        <MDBCol md="4">
                            <img src={arr[0].img} className="img-fluid z-depth-1" alt="" />
                        </MDBCol>
                        <MDBCol md="8">
                            <p className="font-weight-bold">{arr[0].text}</p>
                        </MDBCol>
                    </MDBRow>
                    <MDBRow className="mb-4">
                        <MDBCol md="12">
                            <p>Таким образом состоятельные люди пытаются спастись от коронавируса</p>
                            <p>Во время пандемии коронавируса обеспеченные россияне стали чаще покупать бункеры и комнаты безопасности из-за страха перед последствиями инфекции. Об этом СМИ рассказали в компаниях по производству убежищ. Спрос на бункеры вырос и среди российских богачей. По словам главного менеджера Rising S Company Гари Линча, состоятельные люди из РФ обращаются в американскую компанию часто. Только в этом году убежища стоимостью около $150 тыс. купили двое россиян.</p>
                        </MDBCol>
                    </MDBRow>
                    <MDBRow className="mb-4">
                        <MDBCol md="4">
                            <img src={arr[1].img} className="img-fluid z-depth-1" alt="" />
                        </MDBCol>
                        <MDBCol md="8">
                            <p className="font-weight-bold">{arr[1].text}</p>
                        </MDBCol>
                    </MDBRow>
                    <MDBRow className="mb-4">
                        <MDBCol md="12">
                            <p>Линч отметил, что за первые три месяца 2020 г. спрос на защитные объекты вырос на 2000%. Поднялись продажи и в другой американской компании – Vivos, – куда также обращались клиенты из России. Однако приобретают убежища не только у американских производителей, но и у отечественных. Руководитель "Спецгеопроекта" Данила Андреев поделился с Forbes, что только в апреле компания получила пять заказов. В обычное же время строится лишь один бункер в месяц.</p>
                            <p>Основные покупатели – жители Москвы и Санкт-Петербурга. При этом Андреев отметил, что в России большей популярностью пользуются не бункеры, а специальные комнаты безопасности, способные защитить не только от различных отравляющих газов, но и беспорядков. Защитный бункер будет стоить россиянам от 890 тыс. до 7,6 млн руб., передает URA.RU. В мирное время помещение можно использовать как домашний кинотеатр, спортзал или винный погреб.</p>
                        </MDBCol>
                    </MDBRow>
                    <MDBRow className="mb-4">
                        <MDBCol md="4">
                            <img src={arr[2].img} className="img-fluid z-depth-1" alt="" />
                        </MDBCol>
                        <MDBCol md="8">
                            <p className="font-weight-bold">{arr[2].text}</p>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </Grid>
            <Grid item xs={12} sm={4}>
                <MDBRow className="mb-4">
                    <MDBCol md="12">
                        <MDBView zoom >
                            <img
                            className="d-block w-100"
                            src={arr[3].img}
                            style={{borderRadius: 10+'px'}}
                            />
                            <MDBMask style={{borderRadius: 10+'px'}} className="d-flex align-items-end" overlay="black-light">
                                <h5 className="white-text font-weight-bolder p-3">{arr[3].text}</h5>
                            </MDBMask>
                        </MDBView>
                    </MDBCol>
                </MDBRow>
                <MDBRow className="mb-4">
                    <MDBCol md="12">
                        <MDBView zoom >
                            <img
                            className="d-block w-100"
                            src={arr[4].img}
                            style={{borderRadius: 10+'px'}}
                            />
                            <MDBMask style={{borderRadius: 10+'px'}} className="d-flex align-items-end" overlay="black-light">
                                <h5 className="white-text font-weight-bolder p-3">{arr[4].text}</h5>
                            </MDBMask>
                        </MDBView>
                    </MDBCol>
                </MDBRow>
                <MDBRow className="mb-4">
                    <MDBCol md="12">
                        <MDBView zoom >
                            <img
                            className="d-block w-100"
                            src={arr[5].img}
                            style={{borderRadius: 10+'px'}}
                            />
                            <MDBMask style={{borderRadius: 10+'px'}} className="d-flex align-items-end" overlay="black-light">
                                <h5 className="white-text font-weight-bolder p-3">{arr[5].text}</h5>
                            </MDBMask>
                        </MDBView>
                    </MDBCol>
                </MDBRow>
                <MDBRow className="mb-4">
                    <MDBCol md="12">
                        <MDBView zoom >
                            <img
                            className="d-block w-100"
                            src={arr[6].img}
                            style={{borderRadius: 10+'px'}}
                            />
                            <MDBMask style={{borderRadius: 10+'px'}} className="d-flex align-items-end" overlay="black-light">
                                <h5 className="white-text font-weight-bolder p-3">{arr[6].text}</h5>
                            </MDBMask>
                        </MDBView>
                    </MDBCol>
                </MDBRow>
            </Grid>
        </Grid>

        <NewsMain arr={props.news.arr}/>

        </div>
    </MDBContainer>
  );
}
