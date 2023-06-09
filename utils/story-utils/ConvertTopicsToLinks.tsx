import slugify  from 'slugify';
// import next link 
import Link from 'next/link'

const convertTopicsToLinks = (topics: string[]) => {
    return topics.map((topic) => {
        return {
            displayLabel: topic,
            slug: slugify(topic).toLowerCase(),
            link: <Link href={`/topic/${slugify(topic).toLowerCase()}`}>{topic}</Link>,
        };
    });
};

export default convertTopicsToLinks;