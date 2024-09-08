import {
  FacebookIcon,
  FacebookShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  PinterestIcon,
  PinterestShareButton,
  TwitterIcon,
  TwitterShareButton,
  WhatsappIcon,
  WhatsappShareButton,
} from "react-share";

function SocialComponent({ socialUrl }) {
  return (
    <div className="flex gap-4">
      <FacebookShareButton url={socialUrl}>
        <FacebookIcon />
      </FacebookShareButton>

      <TwitterShareButton url={socialUrl}>
        <TwitterIcon />
      </TwitterShareButton>

      <LinkedinShareButton url={socialUrl}>
        <LinkedinIcon />
      </LinkedinShareButton>
      <WhatsappShareButton url={socialUrl}>
        <WhatsappIcon />
      </WhatsappShareButton>
      <PinterestShareButton url={socialUrl}>
        <PinterestIcon />
      </PinterestShareButton>
    </div>
  );
}

export default SocialComponent;
