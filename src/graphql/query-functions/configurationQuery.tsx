import { gql } from '@apollo/client';
import apolloClient from '../Client';
import { Configuration } from '../../types/index.d';

const queryConfiguration = async (configurationKey: string): 
    Promise<{
    ConfigurationReferenceId: string,
    value: string,
    configKey: string
    }[]> => {

    const CONFIGURATION_QUERY = gql`
    query ConfigQuery {
        configurationCollection(where: { configKey: "${configurationKey}" } ) {
          items {
            configKey
            configurationReference {
                sys {
                    id
                    }
                } 
            }
        }
    }
`

    const { data } = await apolloClient.query({
        query: CONFIGURATION_QUERY,
    });

    // pull out the items array from the response
    const items: Configuration[] = data?.configurationCollection?.items;

    if (!items) {
        // return dummy 
        return [{
            ConfigurationReferenceId: "dummy",
            value: "dummy",
            configKey: "dummy"
        }];
    }

    // for each item, get the configurationReference.sys.id, value, and configKey
    // then return an array of objects with those values

    const configurationArray = items?.map((item) => {
        return {
            ConfigurationReferenceId: item?.configurationReference?.sys?.id,
            value: item?.value,
            configKey: item?.configKey
        }
    });

    return configurationArray;
}


export default queryConfiguration;