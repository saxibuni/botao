<template>
	<transition name="slideFadeIn">
		<Popup class="agreement" v-if="$store.state.deal">
			<div class="mask"></div>
			<div class="body">
				<img
					@click="$store.state.deal=false"
					class="close"
					src="~assets/icons/ic_home_popup_close2.png"
					alt=""
				/>
				<div>
					<h1>隐私政策</h1>
					<div class="text">
					本公司基于“与个人信息保护相关的法律”公布以下内容。 <br>
					<p>一、关于个人信息保护的行动指南</p>
					<p>基本方针</p>
					上海波涛家庭装饰有限公司（以下称“本公司”）深刻认识到个人信息是构成隐私的重要信息，在处理事业活动中涉及的<br>
					个人信息时，所有董事和员工都将遵守个人信息相关法律法规和公司内部的个人信息保护规定，尊重个人的权利与利<br>
					益，回报本公司被寄予的信赖与期待，履行社会责任。<br>
					个人信息的处理<br>
					1、个人信息的获取<br>
					本公司将在向本人公布或通知个人信息使用目的的基础上获取个人信息。<br>
					2、个人信息的使用<br>
					本公司将在征得本人同意的使用目的的范围内使用个人信息，但法律法规允许的情况除外。如果更改了个人信息的使用<br>
					目的，将向本人公布或通知更改后的使用目的，在征得本人同意后使用。<br>
					3、向第三方公开、提供个人信息<br>
					本公司不会向第三方提供或公开个人信息，但事前征得本人同意时以及法律法规允许的情况除外。<br>
					4、个人信息的安全对策<br>
					为防止个人信息遭到丢失、破坏、篡改、泄露、非法访问等，本公司将完善公司内部规定、采取合理的安全策略。并且，<br>
					本公司将对处理个人信息的员工实施教育，同时与委托单位就个人信息的处理和安全措施签署协议，实施妥善管理。<br>
					5、本人对个人信息相关事宜的咨询<br>
					本公司将设置个人信息处理的咨询电话。就本公司保管的个人信息，如果本人或合法代理人提出使用目的通知、披露、<br>
					纠正/追加/删除、停止使用/消除个人信息、停止向第三方提供的要求，本公司将在合理范围内进行必要的处理。<br>
					<p>二、公布关于个人信息使用目的的事项</p>
					1、个人信息的使用目的<br>
					本公司将在下方所示的业务和为达成使用目的的必要范围内，使用从客户、合作伙伴、股东等相关人员（以下简称“客<br>
					户等”）处获取的个人信息。但本公司在获取时另外公布或通知了使用目的并征得本人同意的个人信息，将在其相应的使<br>
					用目的的范围内使用。另外，2021年9月1日以前本公司获取并保管的个人信息，也将在以下使用目的的范围内使用。<br>
					业务内容<br>
					（1）主要是作为上海波涛家庭装饰公司经营管理的业务；<br>
					（2）此外，还开展章程中规定的业务及其附带业务。<br>
					使用目的<br>
					（1）为了在本公司进行产品（包括装修装饰品等）、各类服务的促销、销售以及服务介绍时，确认客户等为本人或本<br>
					人的代理人；<br>
					（2）为了办理与客户等的交易相关的事务（与销售、购买以及货款回收、支付相关的事务）；<br>
					（3）为了新产品开发、商品化以及服务的营销活动；<br>
					（4）为了在承接了其他企业关于全部或部分个人信息处理的委托时，妥善执行承接的业务；<br>
					（5）为了管理客户信息和产品信息；<br>
					（6）为了向股东通知控股公司信息和分红事宜等注；<br>
					（7）为了开展公司公共关系活动相关业务；<br>
					（8）为了开展公司招聘活动相关的业务；<br>
					（9）为了开展与采购、购买活动相关的业务；<br>
					（10）为了妥善顺利履行与客户等之间交易的其他事宜。<br>
					2、共同使用<br>
					本公司将对客户等的个人信息进行如下所示的共同使用。<br>
					（1）共同使用的个人信息项目<br>
					姓名、电话、邮箱、微信号、房屋地址、房屋结构图、房屋装修图等；<br>
					（2）共同使用者的范围<br>
					波涛家装关联公司、共同研究机构、特约经销商、代理商等；<br>
					（3）使用目的<br>
					与上述“个人信息的使用目的”一致。<br>
					3、向第三方提供个人信息<br>
					本公司将妥善管理客户等的个人信息，未经事先同意，不会将客户等的个人信息提供给第三方。但下列情况除外。<br>
					1.事先征得本人同意时<br>
					2.法律法规有规定时<br>
					3.保护人的生命、身体或财产所需，且难以征得本人同意时<br>
					4.对于提升公共卫生或促进儿童健康成长尤为必要，且难以征得本人同意时<br>
					5.协助国家机构或地方公共团体或者受这些机构委托的单位或个人执行法律法规规定的事务所需，且征求本人同意<br>
					可能妨碍该事务执行时<br>
					6.在达成使用目的的必要范围内，将个人信息处理的全部或部分委托给第三方时<br>
					7.因合并或其他事由而进行事业继承，将个人信息提供给继承方时<br>
					8.提供给上述2-2的共同使用者范围内罗列的单位时<br>

					4、您如何管理您的个人信息<br>
					波涛家装非常重视您对个人信息的关注，并尽全力保护您对于您个人信息访问、更正、删除以及撤回同意的权利，以使<br>
					您拥有充分的能力保障您的隐私和安全。您的权利包括：<br>
					1、更正您的个人信息<br>
					2、删除您的个人信息<br>
					在以下情形中，您可以向我们提出删除个人信息的请求：<br>
					（1）如果我们处理个人信息的行为违反法律法规；<br>
					（2）如果我们收集、使用您的个人信息，却未征得您的同意；<br>
					（3）如果我们处理个人信息的行为违反了与您的约定；<br>
					（4）如果您不再使用我们的产品或服务，或您注销了在波涛家装的登录账号；<br>
					（5）如果我们终止服务及运营。若我们决定响应您的删除请求，我们还将同时通知从我们获得您的个人信息的实体，<br>
					要求其及时删除，除非法律法规另有规定，或这些实体获得您的独立授权。若我们响应您的删除请求，我们不能保证立<br>
					即从备份系统中删除相应的信息，但会在备份系统更新时删除这些信息。<br>
					5、获取您的个人信息副本<br>
					您有权获取您的个人信息副本。如您需要获取我们收集的您的个人信息副本，您随时联系我们。在符合相关法律规定且<br>
					技术可行的前提下，我们将根据您的要求向您提供您的个人信息副本。<br>
					6、如果您不想接受我们给您发送的促销信息，您随时可通过以下方式取消：<br>
					（1）您可通过PC端账户设置页面的邮件订阅菜单中取消邮件订阅的促销信息。<br>
					（2）您可以根据促销短信内容提示，来取消我们给您发送的手机促销短信。<br>
					（4）我们会与第三方的平台或媒体（“平台”）合作基于您的个人信息向您推荐个性化的商品。这些个人信息包括诸如<br>
					在本网站的产品与/或服务使用情况、访问本网站关联公司网站的情况及您在您的账户设置中填写的兴趣爱好。平台<br>
					仅向我们提供了展示商品的窗口，窗口内容的链接是波涛家装的个性化商品展示信息，由波涛家装进行管理，因此我们<br>
					不会向广告商提供您的任何个人信息。而且我们在推荐窗内设置了屏蔽功能，您可选择屏蔽您不喜欢的广告。如您不愿<br>
					意接受波涛家装在单个平台上的推荐服务，请联系平台进行关闭。您知晓并理解平台是自主经营的实体，波涛家装无法对<br>
					其进行管理。<br>
					（5）为了保护您的隐私，我们不会以任何方式和途径向您推送涉及宗教信仰、性取向等相关敏感内容的促销或商品信<br>
					息给您。<br>
					7、响应您的请求<br>
					如果您无法通过上述方式访问、更正或删除您的个人信息，或您需要访问、更正或删除您在使用我们产品与/或服务时<br>
					所产生的其他个人信息或者获取个人信息副本，或您认为京东存在任何违反法律法规或与您关于个人信息的收集或使用<br>
					的约定，您均可以电话至或通过本隐私政策中的其他方式与我们联系。为了保障安全，我们可能需要您提供书面请求，<br>
					或提供您的身份证明文件，我们将在收到您反馈并验证您的身份后的15天内答复您的请求。对于您合理的请求，我们<br>
					原则上不收取费用，但对多次重复、超出合理限度的请求，我们将视情收取一定成本费用。对于那些无端重复、需要过<br>
					多技术手段（例如，需要开发新系统或从根本上改变现行惯例）、给他人合法权益带来风险或者非常不切实际（例如，<br>
					涉及备份磁带上存放的信息）的请求，我们可能会予以拒绝。<br>
					在以下情形中，按照法律法规要求，我们将无法响应您的请求：<br>
					（1）与个人信息控制者履行法律法规规定的义务相关的；<br>
					（2）与国家安全、国防安全有关的；<br>
					（3）与公共安全、公共卫生、重大公共利益有关的；<br>
					（4）与犯罪侦查、起诉和审判和执行判决等有关的；<br>
					（5）有充分证据表明您存在主观恶意或滥用权利的；<br>
					（6）出于维护个人信息主体或其他个人的生命、财产等重大合法权益但又很难得到本人同意的；<br>
					（7）响应您的请求将导致您或其他个人、组织的合法权益受到严重损害的；<br>
					（8）涉及商业秘密的。<br>
					<p>三、未成年人的个人信息保护</p>
					1、波涛家装非常重视对未成年人个人信息的保护。若您是18周岁以下的未成年人，在使用我们的产品与/或服务前，<br>
					应事先取得您监护人的同意。波涛家装根据国家相关法律法规的规定保护未成年人的个人信息。<br>
					2、我们不会主动直接向未成年人收集其个人信息。对于经监护人同意而收集未成年人个人信息的情况，我们只会在受<br>
					到法律允许、监护人同意或者保护未成年人所必要的情况下使用、共享、转让或披露此信息。<br>
					3、如果有事实证明未成年人在未取得监护人同意的情况下注册使用了我们的产品与/或服务，我们会与相关监护人协商，<br>
					并设法尽快删除相关个人信息。<br>
					<p>四、通知和修订</p>
					1、为给您提供更好的服务以及随着波涛家装业务的发展，本隐私政策也会随之更新。但未经您明确同意，我们不会削<br>
					减您依据本隐私政策所应享有的权利。我们会通过在波涛家装网站上发出更新版本并在生效前通过网站公告或以其他适<br>
					当方式提醒您相关内容的更新，也请您访问波涛家装以便及时了解最新的隐私政策。<br>
					2、对于重大变更，我们还会提供更为显著的通知（我们会通过包括但不限于邮件、短信或在浏览页面做特别提示等方<br>
					式，说明隐私政策的具体变更内容）。<br>
					本隐私政策所指的重大变更包括但不限于：<br>
					（1）我们的服务模式发生重大变化。如处理个人信息的目的、处理的个人信息类型、个人信息的使用方式等；<br>
					（2）我们在所有权结构、组织架构等方面发生重大变化。如业务调整、破产并购等引起的所有者变更等；<br>
					（3）个人信息共享、转让或公开披露的主要对象发生变化；<br>
					（4）您参与个人信息处理方面的权利及其行使方式发生重大变化；<br>
					（5）我们负责处理个人信息安全的责任部门、联络方式及投诉渠道发生变化时；<br>
					（6）个人信息安全影响评估报告表明存在高风险时。<br>
					3、为了您能及时接收到通知，建议您在联系方式更新时及时通知我们。如您在本政策更新生效后继续使用我们的服务，<br>
					即代表您已充分阅读、理解并接受更新后的政策并愿意受更新后的政策约束。我们鼓励您在每次使用我们服务时都查阅<br>
					本政策。<br>
					<p>五、如何联系我们</p>
					1、如您对本隐私政策或您个人信息的相关事宜或者投诉、举报、有任何问题、意见或建议，请通过以下方式与我们联<br>
					系。<br>
					邮箱：botao_jtb@163.com<br>
					联系电话：021-58160663<br>
					联系地址：上海市徐汇区中山西路2331号<br>
					您还可以随时通过访问在线客服系统或拨打我们的任何一部客服电话4009202982等多种方式与我们联系。<br>
					2、一般情况下，我们将在15天内回复。如果您对我们的回复不满意，特别是我们的个人信息处理行为损害了您的合法<br>
					权益，您还可以向网信、电信、公安及工商等监管部门进行投诉或举报。<br>


			  	<p class="centent">个人信息处理知情同意书</p>

					上海波涛家庭装饰有限公司（简称“波涛家装”）尊重并保护用户个人信息。在您接受 <b>波涛家装的免费设计咨询服务</b>之<br>
					前，波涛家装请您完整地阅读并确认如下知情同意书。14周岁以下（含）未成年用户请在您监护人的陪同下阅读和确<br>
					认。<br>
					<b class="line">个人信息的收集和使用：</b><br>
					<b>鉴于本服务的核心业务功能为：通过波涛家装的免费设计咨询服务，</b>波涛家装需要在您接受服务前收集您以下<b>个人信息</b><br>
					<b>（一项或者多项）</b>：姓名、电话、房屋地址、房屋面积、房屋结构图。<br>
					波涛家装将直接收集或是从波涛家装的合作方（包括但不限于波涛家装的经销商、服务方、京东、天猫或其它网络平台）<br>
					处依法收集您的个人信息。波涛家装和波涛家装的合作方将在必要和合理的范围内收集个人信息。请您真实、准确地提<br>
					供个人信息。<br>
					您接受我们提供的服务，即视为授权同意我们为合法之目的处理您的个人信息。如果您选择不提供或不同意我们收集、<br>
					使用以上部分或全部个人信息，将导致本服务无法完全正常运行，我们将无法为您服务。<br>

					<b> 个人信息的保密和披露：</b> <br>
					波涛家装遵照法律法规对个人信息承担保密的义务，惟当法律法规确有要求或者政府机关提出明确指令的情况下，波涛<br>
					家装将适当披露个人信息。<br>

					<b class="line"> 个人信息的存储：</b> <br>
					收集的个人信息将保存在波涛家装在中国和/或关联公司（在有限且必要的情况下）的服务器上。波涛家装将在服务期<br>
					间内保留您的个人信息，除非法律法规另有明确要求。波涛家装将根据国家法律法规在为实现服务目的所必需的最短期<br>
					限内(三年)保存个人信息，并在超出保存期限后对个人信息进行删除或匿名化处理，保护您的个人信息安全。波涛家装<br>
					在传输和存储个人敏感信息时，将采用加密等安全措施。<br>

					<b class="line"> 个人信息的委托处理、共享：</b> <br>
					在遵守国家法律法规的前提下，波涛家装将委托具备足够的数据安全能力的第三方处理个人信息；在有限且必要的情况<br>
					下，个人信息（包括个人敏感信息）可能传送至波涛家装在中国和/或关联公司的所在地（中国境内），并在当地被波涛<br>
					家装依法访问、使用和存储，并且，波涛家装会与其雇用提供支持服务或与其合作向客户提供产品和服务的第三方（中<br>
					国境内），或与其合作的客户等第三方，共享个人信息。<br>
					<b class="line"> 个人信息的管理和保护：</b> <br>

					<b> 根据适用的中国法律，您对您的个人信息拥有以下权利：访问权、纠正权、删除权撤回同意权、复制权，以及适用法律<br>
					要求的其他个人权利，这些权利的适用情形不同。您可以通过联系（021-58098097*8097）来行使您的权利。<br>
					访问权：您可以要求波涛家装确认您的个人信息是否得到处理。您还有权要求访问您的个人信息和以下信息：处理的目<br>
					的；处理的个人信息类别；已经获得个人信息的第三方身份或类型。</b> <br>

					<b> 纠正权：如果您的个人信息不正确，您有权让波涛家装更正您的个人信息。考虑到处理的目的，您还有权将有关您的不<br>
					完整个人信息予以完整，包括提供补充信息。</b> <br>

					<b> 删除权：在且仅在下列情况下，您可以要求波涛家装删除您的个人信息：（i）波涛家装违反法律法规规定，收集、使用、<br>
					共享、转让、披露个人信息的；（ii）波涛家装违反本知情同意书的内容，收集、使用、共享、转让、披露个人信息的。</b> <br>

					撤回同意权：您可以在使用产品（或服务）或参与活动的过程中，通过联系（021-58098097*8097）撤回对收集上述<br>
					个人信息的同意授权。但撤回同意不影响撤回前基于同意的个人信息处理。<br>
					复制权：您可以通过联系（波涛家装的联系电话），请求获取您提供的个人信息的副本。<br>
					波涛家装重视个人信息安全，将采取适当措施来保护个人信息安全，尽合理努力使个人信息不会被泄漏、毁损或者丢失。<br>
					与此同时，波涛家装请您理解在信息网络领域目前不存在“完美”的安全措施。万一发生安全事件导致您的个人信息遭<br>
					泄露、损毁、篡改、丢失等，我们将立即启动应急预案，及时通知您，采取补救措施，并按照法律规定向政府主管部门<br>
					报告。<br>
					<b> 波涛家装隐私政策：</b> <br>
					<b> 关于个人信息的更多处理规则，请访问波涛家装隐私政策以了解更详细的情况。</b> 您知晓并同意，波涛家装将不时地修改<br>
					更新<b> 波涛家装隐私政策</b> 。您<b> 可以在</b> 波涛家装官网<b> 查阅最新的波涛家装隐私政策</b> 。您持续使用波涛家装的产品（或服务）<br>
					或参与活动即表示您同意经修订更新的波涛家装隐私政策。<br>
					<b class="line"> 个人信息控制者：</b> <br>
					公司名称：上海波涛家庭装饰有限公司<br>
					联系方式：上海徐汇区中山西路2319号波涛建材市场2层<br>
					联系电话：<b>021-58098097*8097</b> <br>
					□我（或，未成年人的法定监护人）已完整地阅读波涛集团隐私政策及本知情同意书。我（或，未成年人的法定监护人）<br>
					已知晓本产品（或服务）的业务功能/本次活动的目的，并在此明确同意波涛家装按照波涛家装隐私政策及本知情并同<br>
					意书收集、使用、披露、存储、管理和保护我的个人信息。<br>
					</div>
					<div class="btn-box">
						<Button @click.native="$store.state.deal=false,$store.state.checkbox=true" text="确定" />
					</div>
				</div>
			</div>
		</Popup>
	</transition>
</template>

<script lang="ts">
import { Vue, Component, Watch } from 'vue-property-decorator';
import Popup from './popup.vue';
import Button from './button.vue';
import utils from 'root/utils';

@Component({
	components: {
		Popup,
		Button
	}
})
export default class agreement extends Vue {

}
</script>
<style scoped lang="scss">
.agreement {
	.body {
	 width:1050px;
	 height:700px;
	 border-radius: 3px;
		padding-left: 80px;
	 h1{
		 text-align: center;
		 font-size: 28px;
		 line-height:60px;
		 padding-right: 80px;
		 padding-top: 20px;
	 }
	 .text{
		 font-size: 17px;
		 height:500px;
		 overflow: auto;
		 margin-top: 20px;
		 padding-right: 10px;
		 line-height: 33px;
		 color: #999;
		 margin-bottom: 20px;
		 width: 920px;
	   @include scrollbar-beautify(8px,5px,#ed5400);
		 p{
			 font-weight: 700;
			 color: #555;
			 &.centent{
				 text-align: center;
				 margin:40px 0;
			 }
		 }
		 b{
			 color: #555;
			 &.line{
				 text-decoration: underline;
			 }
		 }
	 }
	 .btn-box{
		 padding-right: 80px;
	 }
	}
}
</style>
