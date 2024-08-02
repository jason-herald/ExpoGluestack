import { StyleSheet } from "react-native";
import { Box } from "@/components/ui/box";
import { Text } from "@/components/ui/text";
import { VStack } from "@/components/ui/vstack";
import { ScrollView } from "@/components/ui/scroll-view";
import { Image } from "@/components/ui/image";
import { Button, ButtonText } from "@/components/ui/button";
import { Input, InputField } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import {
  CheckIcon,
  ChevronDownIcon,
  ChevronUpIcon,
  CircleIcon,
} from "@/components/ui/icon";
import {
  Accordion,
  AccordionContent,
  AccordionContentText,
  AccordionHeader,
  AccordionIcon,
  AccordionItem,
  AccordionTitleText,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Divider } from "@/components/ui/divider";
import React from "react";
import { Actionsheet, ActionsheetBackdrop, ActionsheetContent, ActionsheetDragIndicatorWrapper, ActionsheetDragIndicator, ActionsheetItem, ActionsheetItemText } from "@/components/ui/actionsheet";

export default function HomeScreen() {
  const [showActionsheet, setShowActionsheet] = React.useState(false)
  const handleClose = () => setShowActionsheet(false)
  return (
    <ScrollView>
      <Box className="bg-blue-400 dark:bg-blue-900">
        <Image
          size="2xl"
          source={require("@/assets/images/partial-react-logo.png")}
          alt="React Logo"
          style={styles.reactLogo}
        />
      </Box>
      <VStack className="p-6 space-y-4">
        <Text size="2xl" bold>
          Welcome to GlueStack Demo!
        </Text>

        <VStack className="mt-4 space-y-2">
          <Accordion
            size="md"
            variant="filled"
            type="single"
            isCollapsible={true}
            isDisabled={false}
            className="m-5 w-[90%] border border-outline-200"
          >
            <AccordionItem value="a">
              <AccordionHeader>
                <AccordionTrigger>
                  {({ isExpanded }) => {
                    return (
                      <>
                        <AccordionTitleText>
                          How do I place an order?
                        </AccordionTitleText>
                        {isExpanded ? (
                          <AccordionIcon as={ChevronUpIcon} className="ml-3" />
                        ) : (
                          <AccordionIcon
                            as={ChevronDownIcon}
                            className="ml-3"
                          />
                        )}
                      </>
                    );
                  }}
                </AccordionTrigger>
              </AccordionHeader>
              <AccordionContent>
                <AccordionContentText>
                  To place an order, simply select the products you want,
                  proceed to checkout, provide shipping and payment information,
                  and finalize your purchase.
                </AccordionContentText>
              </AccordionContent>
            </AccordionItem>
            <Divider />
            <AccordionItem value="b">
              <AccordionHeader>
                <AccordionTrigger>
                  {({ isExpanded }) => {
                    return (
                      <>
                        <AccordionTitleText>
                          What payment methods do you accept?
                        </AccordionTitleText>
                        {isExpanded ? (
                          <AccordionIcon as={ChevronUpIcon} className="ml-3" />
                        ) : (
                          <AccordionIcon
                            as={ChevronDownIcon}
                            className="ml-3"
                          />
                        )}
                      </>
                    );
                  }}
                </AccordionTrigger>
              </AccordionHeader>
              <AccordionContent>
                <AccordionContentText>
                  We accept all major credit cards, including Visa, Mastercard,
                  and American Express. We also support payments through PayPal.
                </AccordionContentText>
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <Text size="lg" bold>
            Toggle Switch
          </Text>
          <Switch aria-label="ff"/>
        </VStack>
        <VStack className="mt-4 space-y-2">
        </VStack>
        <Button onPress={() => setShowActionsheet(true)}>
        <ButtonText>Open Actionsheet</ButtonText>
      </Button>
      <Actionsheet isOpen={showActionsheet} onClose={handleClose}>
        <ActionsheetBackdrop />
        <ActionsheetContent>
          <ActionsheetDragIndicatorWrapper>
            <ActionsheetDragIndicator />
          </ActionsheetDragIndicatorWrapper>
          <ActionsheetItem onPress={handleClose}>
            <ActionsheetItemText>Edit Message</ActionsheetItemText>
          </ActionsheetItem>
          <ActionsheetItem onPress={handleClose}>
            <ActionsheetItemText>Mark Unread</ActionsheetItemText>
          </ActionsheetItem>
          <ActionsheetItem onPress={handleClose}>
            <ActionsheetItemText>Remind Me</ActionsheetItemText>
          </ActionsheetItem>
          <ActionsheetItem onPress={handleClose}>
            <ActionsheetItemText>Add to Saved Items</ActionsheetItemText>
          </ActionsheetItem>
          <ActionsheetItem isDisabled onPress={handleClose}>
            <ActionsheetItemText>Delete</ActionsheetItemText>
          </ActionsheetItem>
        </ActionsheetContent>
      </Actionsheet>
      </VStack>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  reactLogo: {
    height: 178,
    width: 290,
    position: "absolute",
    bottom: 0,
    left: 0,
  },
});
