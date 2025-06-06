import { Button } from '@chakra-ui/react';
import { FaXTwitter } from 'react-icons/fa6'

type TweetButtonProps = {
  text?: string;
  url?: string;
  hashtags?: string[];
};

const TweetButton: React.FC<TweetButtonProps> = ({ 
  text = "DevQuizz", 
  url, 
  hashtags = [] 
}) => {
  const currentUrl = typeof window !== 'undefined' ? window.location.href : '';
  const tweetText = encodeURIComponent(text);
  const tweetUrl = encodeURIComponent(url || currentUrl);
  const hashtagParam =
    hashtags.length > 0
      ? `&hashtags=${encodeURIComponent(hashtags.join(","))}`
      : "";
  const tweetLink = `https://twitter.com/intent/tweet?text=${tweetText}&url=${tweetUrl}${hashtagParam}`;

  return (
    <a
      href={tweetLink}
      target="_blank"
      rel="noopener noreferrer"
      style={{ textDecoration: 'none', display: 'inline-block' }}
    >
      <Button
        colorScheme="twitter"
        variant="solid"
        display="flex"
        alignItems="center"
        gap={2}
      >
        <FaXTwitter />
        シェア
      </Button>
    </a>
  );

}

export default TweetButton;