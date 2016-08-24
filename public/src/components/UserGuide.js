/**
 * Created by rendandan on 16-8-23.
 */
import React, {Component} from 'react';//eslint-disable-line no-unused-vars
import Header from './Header';
import Footer from './Footer';

class UserGuide extends Component {
  render() {
    return (
      <div>
        <Header />
        <br/>
        <div className="userGuide">
          <ul>
            <li className="userGuideTitle1">独特的房间和预订</li>
            <p>萤火虫是一个基于分享经济的社交住宿平台。在萤火虫上，您将有机会住进一个陌生朋友的家中，价格不到酒店的一半，
              却像在自己家里一样舒适和方便，萤火虫会让您拥有一次不同寻常的旅行体验。</p>
            <p>小猪上大部分房间都只有一套，按照出行日期搜索可以查看所有符合您要求的房间。如果您的出行计划有弹性，也可以试试调整出行日期搜索，
              有时候可能会有惊喜。当然，更早的出行计划而不是临时抱佛脚，会有更多好的房间供您挑选。</p>
            <p>您在小猪上选好中意的房间并下单后，是需要等待房东确认后方可付款的。因此，与房东适当的在线沟通非常必要。
              有效的在线沟通可以帮助您进一步了解房子 的详细信息，如果您主动向房东介绍自己，同时告知对方您的行程目的和计划，房东也可以籍此更了解您，因而也更容易接受您的预订请求。</p>
            <li className="userGuideTitle2">入住、评价和分享</li>
            <p>我们建议您在入住前一天或两天再次联系房东，告知您将要到达的准确时间，同时了解当地的天气，了解如何到达住处，也可以提醒房东做好接待准备。</p>
            <p>每一个朋友的相识都是缘分，如果有可能，希望您和房东一起聊聊天。您可以通过房东了解当地的风土人情，小吃美食，还有那些只有当地人才知道的关于那座城市的秘密。
              您和房东还可以互相分享各自的旅行经历或读书感悟，一起做几道拿手菜。总之，真诚、坦率的相互沟通，总是受人欢迎的。</p>
            <p>在您入住完成后，您可以对房东和房间进行评价并记录自己真实的入住感受，这些评价能帮助其他房客了解房间和房东。同时房东也可以对您进行评价，
              其他房东可以藉由这些评价来了解您。因此，希望您珍惜每次的入住机会，重视自己的交易记录，做一个受欢迎的房客。</p>
            <li className="userGuideTitle3">安全完备的保障</li>
            <p>您在小猪上的每一张订单，都将获赠一份由第三方保险公司承保的价值10万元的人身意外伤害险，保障您在入住期间所有的人身意外伤害。</p>
            <p>在小猪上下单预订并入住，是以上保障计划得以实施的前提。我们只能对您在小猪上完成的交易进行保障，未在小猪上完成的交易，
              我们是无法提供保障的，因此，希望您所有交易在线上完成。</p>
          </ul>
        </div>

        <Footer />
      </div>
    );
  }
}

export default UserGuide;