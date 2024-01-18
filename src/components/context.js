import {placeInfo,detailInfo} from '../data';
import React,{Component} from 'react';

const InfoContext=React.createContext();

class InfoProvider extends Component{
    state={
        info:placeInfo,
        detailInfo:detailInfo
    };
    getItem = id => {
        const item = this.state.info.find(item => item.id === id);
        return item;
      };
      handleDetail = id => {
        const item = this.getItem(id);
        this.setState(() => {
          return {
            detailInfo: item
          };
        });
      };
    
      render() {
        return (
          <InfoContext.Provider
            value={{
              info: this.state.info,
              headerTitle: this.state.headerTitle,
             /* headerSubtitle:this.state.headerSubtitle,
              description:this.state.description,
              works:this.state.works,
              example1:this.state.example1,
              example2:this.state.example2,*/
              detailInfo:this.state.detailInfo,
              handleDetail:this.handleDetail,
              description:this.state.description
            }}
          >
            {this.props.children}
          </InfoContext.Provider>
        );
      }
}
const InfoConsumer = InfoContext.Consumer;

export { InfoProvider, InfoConsumer };